import mongoose from 'mongoose';
import *as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

let cachedConnection: typeof mongoose | null = null;

const connectDB = async (): Promise<typeof mongoose | null> => {
  if (cachedConnection) {
    console.log('Using existing MongoDB connection');
    return cachedConnection;
  }

  try {
    const mongoURI = process.env.MONGO_URI;
    
    if (!mongoURI) {
      throw new Error('MongoDB URI is missing in environment variables');
    }

    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Helps prevent long cold starts
      socketTimeoutMS: 45000, // Adjusted timeout for Lambda
    });

    cachedConnection = conn;
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    return conn;
  } catch (error) {
    console.error(`MongoDB connection error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return null; // Avoid process.exit(1); since Lambda will retry
  }
};

export default connectDB;
