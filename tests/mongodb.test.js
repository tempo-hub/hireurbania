import test from 'node:test';
import assert from 'node:assert/strict';

const { connectDB, hasMongoConfig } = await import('../lib/mongodb.ts');

test('connectDB does not throw when MongoDB is not configured', async () => {
  delete process.env.MONGODB_URI;

  assert.equal(hasMongoConfig(), false);
  const result = await connectDB();
  assert.equal(result, null);
});
