import { getPost } from "../lib/getPost";
import Cards from '../components/cards';
import { montserrat } from "./layout";
import Hero from '../components/hero'

export default  async function Home() {

  const post = await getPost();


  return (
  <div className="flex flex-col justify-center items-center mb-6">
    <Hero />
    <h2 className={`${montserrat.className} text-3xl  font-bold`}>Articles</h2>
    <hr className=" bg-black w-4/5 h-1 mt-1 "/>
     <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-6 mx-5 my-5">
       {
          post.length > 0 &&  post.map((arr)=>{
            return (
            <Cards key={arr._id} post={arr} />
            )
         })
       }
     </div>
   </div>
  );
}
