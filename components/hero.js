
const Hero = () => {
  return (
    <div className="grid max-h-svh w-full grid-cols-2 grid-rows-12">
     <div className="row-span-12 bg-blue-900  relative">
     <img  src="\ChongQing - the New World Habitat.jpg" className=" object-cover h-full w-full"/>
     </div>
     <div className="row-span-6  bg-red-700 relative">
     <img  src="\ab7bb130-2166-4e2e-bbeb-1e3b234e3e2b.jpg" className=" object-cover h-full w-full"/>
     </div>
     <div className="row-span-6 bg-green-900 relative">
      <img  src="/719bece7-57d1-4eea-a1ee-70af92a4b2bd.jpg" className=" object-cover h-full w-full"/>
     </div>
    </div>
    
  )
}

export default Hero