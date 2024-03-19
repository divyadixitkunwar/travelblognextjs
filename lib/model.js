import mongoose, { Mongoose, Schema, model } from 'mongoose';

  const blogPostSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    article: { type: String, required: true },
  });
    


 export const blogPost = mongoose.models.blogpost || mongoose.model('blogpost', blogPostSchema ,'post');