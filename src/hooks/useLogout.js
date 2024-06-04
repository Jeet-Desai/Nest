import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast';
import useAuthStore from '../store/useAuthStore';

const useLogout = () => {
  
    const [signOut,loading,error] = useSignOut(auth);
    const showToast=useShowToast();
    const authLogout= useAuthStore(state=>state.logoutUser);

    const signOutUser= async()=>{
        try
        {
            await signOut();
            localStorage.removeItem("user-info");
            authLogout();
            showToast("Success","Logged out successfully","success")

        }
        catch(error)
        {
            alert(error.message)
            console.log(error.message);
        }
    }
    return {signOutUser,loading,error}
}

export default useLogout