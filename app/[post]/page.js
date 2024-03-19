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
    <div >
      <img src={article.image} alt={article.title}/>
      <h2>{article.category}</h2>
      <p>{article.article}</p>
    </div>
  )
}

export default Page;