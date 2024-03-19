import mongoose from "mongoose";

const uri  = process.env.MONGO

export const dbconnect = async  () => {
   if(uri) {
    try{
        const db =  await mongoose.connect(uri);
        return db;
    }
    catch(err){
        console.log('this is where the error occured')
        throw new Error(err)
    }
   }
}
