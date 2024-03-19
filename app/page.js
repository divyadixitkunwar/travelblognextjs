import Link from "next/link";
import { getPost } from "../lib/getPost";


export default  async function Home() {

  const post = await getPost();
  console.log(`'this is the post '${post[0].title}`)
  

  return (
    <div className="grid grid-cols-3 gap-4">
    {
      post.length > 0 && post.map(arr=>{
        return(
          <div key={arr._id}>
            <img src={arr.image} alt={arr.title}/>
            <p>{arr.title}</p>
            <Link href={`/${arr._id}`}>Read more </Link>
          </div>
        )
      })
    }
  </div>
  );
}
