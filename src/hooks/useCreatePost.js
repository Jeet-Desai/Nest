import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast"
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import usePostStore from "../store/usePostStore";
import useProfileStore from "../store/useProfileStore";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const useCreatePost = () => {
    const showToast= useShowToast();
    const authUser= useAuthStore(state=>state.user);
    const postStorecreate= usePostStore(state=>state.createPost);
    const addPost= useProfileStore(state=>state.addPost);
    const userProfile = useProfileStore(state=>state.userProfile)
    const [isUpdating,setUpdating]=useState(false);
    const {pathname} =useLocation()

    const createPost = async(image,caption)=>{
        if(isUpdating)
            return;
      if (!image) {
        showToast("Error", "Please select an image", "error");
        return;
      }
        setUpdating(true);
        const newPost={
            caption:caption,
            likes:[],
            comments:[],
            createdBy: authUser.uid,
            createdAt: Date.now()
        }

        try {
            const postDoc = await addDoc(collection(firestore,"posts"),newPost);
            const userRef= doc(firestore,"users",authUser.uid);
            const imageRef= ref(storage,`posts/${postDoc.id}`);
            await updateDoc(userRef,{posts:arrayUnion(postDoc.id)});
            await uploadString(imageRef,image,"data_url")
            const imageURL = await getDownloadURL(imageRef);
           
            await updateDoc(postDoc,{imageURL:imageURL});
            newPost.imageURL=imageURL;
            // postStorecreate({...newPost,id:postDoc.id})
            if(pathname!="/" && userProfile.uid==authUser.uid)
            addPost({...newPost,id:postDoc.id});
            showToast("Success","Post created successfully!","success");
        } catch (error) {
            showToast("Error",error.message,"error");
        }
        finally{
            setUpdating(false);
        }
    }
    return {isUpdating,createPost}
}

export default useCreatePost