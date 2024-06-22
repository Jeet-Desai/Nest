import React, { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast";
import useProfileStore from "../store/useProfileStore";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, collection, doc, getDoc, updateDoc, where } from "firebase/firestore";

const useFollowUnfollow = (otherUserID) => {
  const { user, updateUser } = useAuthStore();
  const showToast = useShowToast();
  const [isFollowing, setFollowing] = useState(false);
  const { userProfile,setUserProfile } = useProfileStore();
  const [isUpdating, setUpdating] = useState(false);

  const FollowUnfollow = async () => {
    setUpdating(true);
    try {
      const userDoc = doc(firestore, "users", user.uid);
      const otherUserDoc = doc(firestore,"users",otherUserID);
      await updateDoc(userDoc, {
        following: isFollowing ? arrayRemove(otherUserID) : arrayUnion(otherUserID)
      })
      await updateDoc(otherUserDoc,{
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid)
      })

      if(isFollowing){
        const updatedUser={
            ...user,
            following: user.following.filter((uid)=>uid!==otherUserID)
        }
        updateUser(updatedUser)
        if(userProfile)
          {
        setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter((uid)=>uid!==user.uid)

        })
      }
        localStorage.setItem("user-info",JSON.stringify(updatedUser))
        setFollowing(false);
      }
      else
      {
        const updatedUser={
            ...user,
            following: [...user.following,otherUserID]
        }
        updateUser(updatedUser);
        if(userProfile)
          {
        setUserProfile({
            ...userProfile,
            followers : [...userProfile.followers,user.uid]
        })
      }
        localStorage.setItem("user-info",JSON.stringify(updatedUser));
        setFollowing(true);

      }
      
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    if (user && user.following.includes(otherUserID)) setFollowing(true);
    else setFollowing(false);
  }, [user, otherUserID]);

  return { isFollowing, isUpdating, FollowUnfollow };
};

export default useFollowUnfollow;
