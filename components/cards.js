import Link from "next/link"
 

const Cards = ({post}) => {

  return (
    <div key={post._id} className="w-full h-full rounded-lg bg-white shadow-2xl">
      <div className="p-2">
          <img src={post.image} alt={post.title} className="rounded-xl h-80 object-cover w-full" />
          <p className="mt-2 text-sm">{post.title}</p>
         <Link href={`/${post._id}`} className="hover:underline mt-2">Read more</Link>
     </div>
    </div>
  )
}

export default Cards

