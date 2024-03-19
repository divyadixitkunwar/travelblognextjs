import React from 'react'
import { handlegithub } from '../../lib/action'



const Login =  () => {

  return (
    <form action={handlegithub}>
        <button>Sign in with github</button>
   </form> 
  )
}

export default Login 