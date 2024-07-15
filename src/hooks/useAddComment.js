import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast"
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/usePostStore";

const useAddComment = () => {
    const showToast=useShowToast();
    const authUser= useAuthStore(state=>state.user);
    const [isCommenting,setCommenting]=useState(false);
    const addPostComment= usePostStore(state=>state.addComment)

    const addComment = async(postID,commentText)=>{
        if(isCommenting)
            return
        if(!authUser)
        {
            showToast("Error","You need to be logged in to comment!","error");
            return;
        }
        setCommenting(true)
        const comment= {
            commentText,
            createdBy:authUser.uid,
            createdAt:Date.now(),
            postID
        }
        try {
            await updateDoc(doc(firestore,"posts",postID),{
                comments:arrayUnion(comment)
            })
            addPostComment(postID,comment);
            // showToast("Success","Comment posted successfully!","success")
            
        } catch (error) {
            showToast("Error",error.message,"error");
        }
        finally{
            setCommenting(false)
        }
    }
    return {addComment,isCommenting}
}

export default useAddComment