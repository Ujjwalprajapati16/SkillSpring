import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Handle connection events before connecting
    mongoose.connection.on('connected', () => {
      console.log('✅ Database connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ Mongoose disconnected');
    });

    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
