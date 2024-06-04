import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth,firestore } from "../firebase/firebase.js";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast.js";
import useAuthStore from "../store/useAuthStore.jsx";
import { getDoc } from "firebase/firestore/lite";
const useSignUpWithEmailPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const showToast=useShowToast();
    const authLogin = useAuthStore(state=>state.loginUser);
  const signup = async (input) => {
    if (!input.email || !input.password || !input.userName || !input.fullName) {
        // alert("notpossible")
        showToast("Error","Please fill all the fields appropriatly","error");
      return;
    }

    const userRef = collection(firestore,"users");
    const q = query(userRef,where("userName","==",input.userName));
    const querySnapshot= await getDocs(q);
    // alert("taken")
    if(!querySnapshot.empty)
      {
        // alert("taken")
        showToast("Error","This username is already taken","error");
        return;
      }
    try {
      const newUser = await createUserWithEmailAndPassword(
        input.email,
        input.password
      );
      if (!newUser && error) {
        // alert("notpossible")
        showToast("Error",error.message,"error");
        return;
      }
      if (newUser) {
        const userDoc ={
            uid:newUser.user.uid,
            email:input.email,
            userName:input.userName,
            fullName:input.fullName,
            bio:"",
            profilePicURL:"",
            followers:[],
            following:[],
            posts:[],
            createdAt:Date.now(),
        }
        await setDoc(doc(firestore,"users",newUser.user.uid),userDoc)
        localStorage.setItem("user-info",JSON.stringify(userDoc))
        authLogin(userDoc);
        showToast("Success!", "Welcome! Your profile has been created successfully!","success")
      }
    } catch (error) {
        showToast("Error",error.message,"error");
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailPassword;
