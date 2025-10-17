import mongoose  from "mongoose";
import dotenv from  "dotenv"

dotenv.config()



const connectDB = async ()=>{
  try {
    const mongoURI = process.env. MONGO_URI_URL || 'your_mongo_connection_string_here';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}
export default connectDB;