import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { set } from "firebase/database";
import useAuthStore from "../store/useAuthStore";

const useGoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const authLogin = useAuthStore((state) => state.loginUser);
  const signIn = async () => {
    try {
      const userCred = await signInWithGoogle();
      if (!userCred && error) showToast("Error", error.message, error);
      const docref = doc(firestore, "users", userCred.user.uid);
      const docSnap = await getDoc(docref);
      if (userCred && !docSnap) {
        const userDoc = {
          uid: userCred.user.uid,
          email: userCred.user.email,
          userName: userCred.user.email.split("@")[0],
          fullName: userCred.user.displayName,
          bio: "",
          profilePicURL: userCred.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", userCred.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        authLogin(userDoc);
        showToast(
          "Login Successful",
          "Welcome " + userCred.user.displayName,
          "success"
        );
      } else if (docSnap) {
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        authLogin(docSnap.data());
        showToast("Success", "Welcome " + userCred.user.displayName, "success");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signIn };
};

export default useGoogleSignIn;
