import React from 'react'
import { handlegithub } from '../../lib/action'
import { montserrat } from '../layout'


const Login =  () => {

  return (
    <div className='grid grid-cols-2 '>
    <div className='flex flex-col justify-center pl-32 gap-5 pr-36'>
      <h2 className={` font-bold text-xl ${montserrat.className}`}>Create an account</h2>
    <form action={handlegithub} className='flex flex-col gap-5 '>
        <input placeholder='Enter your email '/>
        <input placeholder='Enter your password '/>
        <button className='bg-black text-white rounded py-2 hover:bg-slate-800'>Sign in</button>
   </form> 
   <form action={handlegithub} className=' w-full'>
   <button className='  hover:bg-slate-100 w-full py-2'>Sign in with github </button>
   </form>
   </div>
   <img src='/download (2).jpg' alt='product.name' 
   className=' col-span-1 h-svh w-full sm:block hidden ' />
   </div>
  )
}

export default Login 