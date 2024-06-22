import React, { useState } from 'react'
import useShowToast from './useShowToast'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
    const showToast = useShowToast();
    const [isUpdating,setUpdating]= useState(false);
    const [user,setUser] = useState(null);
    
    const searchUser = async(username)=>{
        // alert("helulo")
        setUpdating(true);
        setUser(null);
        try {
            // alert("try")
            const q=query(collection(firestore,"users"),where("userName","==",username));
            const querySnap = await getDocs(q);
            // alert("Searchig");
            if(querySnap.empty)
                {
                    showToast("Error","User not found","error");
                    setUser(null);
                    return;
                }
                querySnap.forEach((doc)=>{
                    setUser(doc.data());
                })
                // alert(user);
                
        } catch (error) {
            showToast("Error",error.message,"error")
            setUser(null);
            
        } finally{
            setUpdating(false);
        }
    }
    return {isUpdating,user,setUser,searchUser};
    
}

export default useSearchUser