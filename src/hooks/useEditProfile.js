import React, { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/useAuthStore";
import useProfileStore from "../store/useProfileStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditProfile = () => {
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore(state=>state.updateUser)
  const [isUpdating, setIsUpdating] = useState(false);
  const { userProfile, setUserProfile } = useProfileStore();

  const editProfile = async (inputs, profilePic) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);
    const storageRef = ref(storage,`profilePictues/${authUser.uid}`)
    const userRef = doc(firestore,"users",authUser.uid)
    let URL=""
    try {
        if(profilePic)
        {
        await uploadString(storageRef,profilePic,"data_url")
        URL = await getDownloadURL(ref(storage,`profilePictues/${authUser.uid}`))
        }
        const updatedUser = {
            ...authUser,
            fullName: inputs.fullName || authUser.fullName,
            userName: inputs.userName || authUser.userName,
            bio: inputs.bio || authUser.bio,
            profilePicURL : URL || authUser.profilePicURL
        }

        await updateDoc(userRef,updatedUser)
        localStorage.setItem("user-info",JSON.stringify(updatedUser))
        setAuthUser(updatedUser)
        setUserProfile(updatedUser)
        setIsUpdating(false)
        showToast("Success","Your profile has been updated successfully !","success");


    } catch (error) {
        showToast("Error",error.message,"error");
    }
  }
  return {editProfile,isUpdating}
};

export default useEditProfile;
