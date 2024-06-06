import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useProfileStore from '../store/useProfileStore';

const useGetUserProfilebyUsername = (username) => {
    const [isLoading,setLoading]=useState(false);
    const showToast = useShowToast();
    const {userProfile,setUserProfile}=useProfileStore();

    useEffect(()=>{
    const getProfile = async()=>{
        setLoading(true);
        try {
            const q = query(collection(firestore,"users"),where("userName","==",username));
            const querySnap= await getDocs(q);

            if(querySnap.empty)
            {
                return setUserProfile(null);
            }
            let userDoc;
            querySnap.forEach((doc)=>userDoc=doc.data());
            // alert(userDoc)
            setUserProfile(userDoc);

            
        } catch (error) {
            showToast("Error",error.message,"error");
        }
        finally{
            setLoading(false)
        }
    }
    getProfile();
},[])
    return {isLoading,userProfile}
}

export default useGetUserProfilebyUsername