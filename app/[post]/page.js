import { error } from "console";
import { blogPost } from "../../lib/model";


const Page = async ({params}) => {

  const {post} = params;
  if(!post){
    throw new error('slug not found ')
    return;
  }

  const article = await blogPost.findById(post);
  console.log(article);

  return (
    <div>
      <img src={article.image} alt={article.title}/>
      <h2>{article.category}</h2>
      <p>{article.article}</p>
    </div>
  )
}

export default Page;