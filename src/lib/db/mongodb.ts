import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
}

type GlobalMongoose = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

// Prevent hot-reload connection spam in dev
const globalForMongoose = global as unknown as { mongoose: GlobalMongoose };

if (!globalForMongoose.mongoose) {
    globalForMongoose.mongoose = { conn: null, promise: null };
}


async function connectDB() {

    const cached = globalForMongoose.mongoose;
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: process.env.MONGODB_DB_NAME || undefined,
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;

}

export default connectDB;