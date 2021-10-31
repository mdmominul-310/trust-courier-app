import firabaseInit from "../Pages/Authentication/Firebase/firabaseInit"
import { GoogleAuthProvider,getAuth, signInWithPopup,FacebookAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";

//call for firebase initilation
firabaseInit();
const UseFirebase=()=>{
    //user State
    const[user,setuser]=useState(null);
    const [isLooding,setLooding]=useState(true)
    const auth=getAuth();
    //Google auth provider
    const googleProvider=new GoogleAuthProvider();
    //facebook provider
    const facebookProvider=new FacebookAuthProvider();
/// Google Sign in method
    const signInWithGoogle=()=>{
        // setLooding(true)
     return   signInWithPopup(auth,googleProvider);
        
    }
//Facebook Sign in
const signInWithFacebook=()=>{
    // setLooding(true);
   return signInWithPopup(auth,facebookProvider);
    
}

//update state change 
    useEffect(()=>{
        // setLooding(true)
        onAuthStateChanged(auth,(user)=>{
        // setLooding(true)
                if(user){
                    setuser(user);
                    console.log(user)
                }
                else{
                    setuser(null)
                 
                }
                setLooding(false)
        })
        // setLooding(false)
    },)
    const logOut=()=>{
        setLooding(true)
        signOut(auth)
        .then(()=>setuser(null))
        .finally(setLooding(false))
    }
    return{
        signInWithGoogle,
        signInWithFacebook,
        user,
        isLooding,
        logOut
        
    }
}
export default UseFirebase;