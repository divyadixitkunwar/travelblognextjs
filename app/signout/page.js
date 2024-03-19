
import React from 'react'
import { handlesignout } from '../../lib/action'



const Login = async () => {

  return (
    <form action={handlesignout}>
        <button>Sign out</button>
   </form> 
  )
}

export default Login 