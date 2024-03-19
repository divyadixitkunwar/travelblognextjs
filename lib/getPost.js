import { dbconnect } from "./dbconnect";
import { blogPost } from "./model";

export const getPost = async () => {
    try{
    dbconnect()
    const posts = await blogPost.find().lean();
   return posts 
  
    }catch(err){
        console.log(`the error is in get post ${err}`);
        
   }
}