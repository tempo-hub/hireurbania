// Copy all docs from `blogs` collection in SOURCE DB to DEST DB.
// Works for different clusters / connection strings.
//
// Usage:
//   1. Set env vars (PowerShell):
//      $env:SOURCE_MONGODB_URI="mongodb+srv://user:pass@old-cluster/oldDb?retryWrites=true&w=majority"
//      $env:DEST_MONGODB_URI="mongodb+srv://user:pass@new-cluster/newDb?retryWrites=true&w=majority"
//   2. Run:
//      node scripts/copy-blogs.mjs
//
// Optional overrides:
//      node scripts/copy-blogs.mjs --collection=blogs --source-db=oldDb --dest-db=newDb
//
// Notes:
// - Matches your Mongoose model in models/Blog.ts (collection = "blogs").
// - Upserts by `slug` (which is unique in your schema), so re-running is safe.
// - Preserves original `_id`, `createdAt`, `updatedAt`.

import { MongoClient } from "mongodb";

function getArg(name, fallback = undefined) {
  const prefix = `--${name}=`;
  const found = process.argv.find((a) => a.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

const SOURCE_URI = process.env.SOURCE_MONGODB_URI || process.env.MONGODB_URI;
const DEST_URI = process.env.DEST_MONGODB_URI;
const COLLECTION = getArg("collection", "blogs");
const SOURCE_DB = getArg("source-db", undefined); // undefined = use db from URI
const DEST_DB = getArg("dest-db", undefined);

if (!SOURCE_URI) {
  console.error(
    "Missing SOURCE_MONGODB_URI. Set $env:SOURCE_MONGODB_URI to your OLD database connection string."
  );
  process.exit(1);
}
if (!DEST_URI) {
  console.error(
    "Missing DEST_MONGODB_URI. Set $env:DEST_MONGODB_URI to your NEW database connection string."
  );
  process.exit(1);
}

const sourceClient = new MongoClient(SOURCE_URI);
const destClient = new MongoClient(DEST_URI);

try {
  await sourceClient.connect();
  await destClient.connect();

  const sourceDb = sourceClient.db(SOURCE_DB);
  const destDb = destClient.db(DEST_DB);

  console.log(`Source: ${sourceDb.databaseName}.${COLLECTION}`);
  console.log(`Dest:   ${destDb.databaseName}.${COLLECTION}`);

  const docs = await sourceDb.collection(COLLECTION).find({}).toArray();
  console.log(`Found ${docs.length} blogs in source.`);

  if (docs.length === 0) {
    console.log("Nothing to copy. Check --source-db / collection name.");
    process.exit(0);
  }

  // Upsert by slug to avoid duplicate-key errors on re-runs.
  const ops = docs.map((doc) => {
    const { _id, ...rest } = doc;
    return {
      updateOne: {
        filter: { slug: doc.slug },
        update: { $set: rest, $setOnInsert: { _id } },
        upsert: true,
      },
    };
  });

  const result = await destDb.collection(COLLECTION).bulkWrite(ops, { ordered: false });

  console.log("Done.");
  console.log(`  Upserted: ${result.upsertedCount}`);
  console.log(`  Modified: ${result.modifiedCount}`);
  console.log(`  Matched:  ${result.matchedCount}`);

  const destCount = await destDb.collection(COLLECTION).countDocuments();
  console.log(`Dest now has ${destCount} docs in ${COLLECTION}.`);
} catch (err) {
  console.error("Copy failed:", err?.message || err);
  process.exit(1);
} finally {
  await sourceClient.close().catch(() => {});
  await destClient.close().catch(() => {});
}
