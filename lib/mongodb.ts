import mongoose from "mongoose";

const globalAny = globalThis as any;

let cached = globalAny.mongoose as
  | {
      conn: typeof mongoose | null;
      promise: Promise<typeof mongoose> | null;
    }
  | undefined;

if (!cached) {
  cached = globalAny.mongoose = {
    conn: null,
    promise: null,
  };
}

const mongoCache = cached;

export function hasMongoConfig() {
  return Boolean(process.env.MONGODB_URI);
}

export function isAtlasWhitelistError(err: unknown): boolean {
  const msg =
    err instanceof Error ? err.message : typeof err === "string" ? err : "";

  return (
    msg.includes("Could not connect to any servers") ||
    msg.includes("whitelist") ||
    msg.includes("IP that isn't whitelisted") ||
    (msg.includes("MongoServerSelectionError") && msg.includes("Atlas"))
  );
}

export function friendlyMongoError(err: unknown): string {
  if (isAtlasWhitelistError(err)) {
    return (
      "MongoDB Atlas connection failed. Check Atlas Network Access, " +
      "database credentials, and the MongoDB URI configured in Vercel."
    );
  }

  const msg =
    err instanceof Error ? err.message : typeof err === "string" ? err : "";

  if (msg.includes("querySrv") || msg.includes("ECONNREFUSED")) {
    return (
      "MongoDB DNS lookup failed locally (querySrv ECONNREFUSED). " +
      "Use the direct mongodb:// URI with explicit shard hosts instead of " +
      "mongodb+srv://, or switch your local DNS to 8.8.8.8. Original error: " +
      msg
    );
  }

  if (err instanceof Error) {
    return err.message;
  }

  return "Failed to connect to database";
}

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is missing. Add MONGODB_URI to Vercel Production Environment Variables."
    );
  }

  if (mongoCache.conn) {
    return mongoCache.conn;
  }

  if (!mongoCache.promise) {
    mongoCache.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 15000,
        connectTimeoutMS: 20000,
        socketTimeoutMS: 30000,
        maxPoolSize: 10,
      })
      .then((m) => {
        console.log("MongoDB: connected successfully");
        return m;
      })
      .catch((err) => {
        mongoCache.promise = null;

        console.error(
          "MongoDB connection failed:",
          friendlyMongoError(err)
        );

        throw err;
      });
  }

  try {
    mongoCache.conn = await mongoCache.promise;
  } catch (err) {
    mongoCache.promise = null;
    mongoCache.conn = null;
    throw err;
  }

  return mongoCache.conn;
}