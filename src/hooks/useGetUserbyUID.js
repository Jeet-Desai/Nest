import { useEffect, useState } from "react";
import useShowToast from "./useShowToast"
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserbyUID = (uid) => {
    
    const showToast=useShowToast();
    const [isUpdating,setUpdating]=useState(true)
    const [userProfile,setProfile]=useState(null)
    useEffect(()=>{
        const getUserProfile=async()=>{
            setProfile(null)
        try {
            const userRef=await getDoc(doc(firestore,"users",uid))
            if(userRef.exists())
            {
                setProfile(userRef.data());
            }
            
        } catch (error) {
         showToast("Error",error.message,"error")   
        }
        finally{
            setUpdating(false)
        }
    }
    getUserProfile();
    },[])
    return {userProfile,isUpdating,setUpdating}
}

export default useGetUserbyUID