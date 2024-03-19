'use server'
import {auth, signIn, signOut} from './auth'
export const handlegithub = async () =>{
    await signIn("github")
 }


export const handlesignout = async () =>{
    await signOut();

}