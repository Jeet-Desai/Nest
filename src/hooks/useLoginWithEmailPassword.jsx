import React from "react";
import { auth, firestore } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/useAuthStore";

const useLoginWithEmailPassword = () => {
  const [SignInUser, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const authLogin = useAuthStore((state) => state.loginUser);

  const login = async (input) => {
    if (!input.email || !input.password) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    try {
      const userCred =await SignInUser(input.email, input.password);
      if (userCred) {
        const docref = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docref);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        authLogin(docSnap.data());
        showToast("Success", "Welcome "+docSnap.data().fullName, "success");
      }
      else
      {
        showToast("Error","Incorrect email/password","error");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { login, loading, error };
};

export default useLoginWithEmailPassword;
