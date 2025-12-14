import mongoose from "mongoose";

async function connectToDatabase(){
    const uri:string | undefined = process.env.MONGODB_URI;
    if(!uri){
        throw new Error("Monngo DB not configured properly");
    }
     try {
    await mongoose.connect(uri, {
    });
    console.log('Connected to MongoDB');
  } catch (ex) {
    console.error('MongoDB connection error:', ex);
    process.exit(1);
  }

}

export {connectToDatabase}