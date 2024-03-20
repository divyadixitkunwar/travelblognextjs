import { error } from "console";
import { blogPost } from "../../lib/model";
import { auth } from "../../lib/auth";
import { redirect } from "next/navigation";

const Page = async ({params}) => {

  
  const session = await auth();
  console.log(`this is the auth ${session}`)

  if(session === null){
    redirect('/');
  }


  const {post} = params;
  if(!post){
    throw new error('slug not found ')
    return;
  }

  const article = await blogPost.findById(post);


  

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden mx-6 my-6">
      <img src={article.image} alt={article.title} className=" object-cover w-full max-h-96"/>
      <h2>{article.category}</h2>
      <p>{article.article}</p>
    </div>
  )
}

export default Page;