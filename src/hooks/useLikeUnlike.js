import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import useAuthStore from "../store/useAuthStore"
import useShowToast from "./useShowToast"
import { auth, firestore } from "../firebase/firebase"
import { useEffect, useState } from "react"
import usePostStore from "../store/usePostStore"

const useLikeUnlike = (post) => {
    const showToast=useShowToast()
    const authUser = useAuthStore(state=>state.user)
    const [liked,setLiked]=useState(post.likes.includes(authUser.uid));
    const [likeCount,setCount]=useState(post.likes.length)
    const likePost=usePostStore(state=>state.likePost)
    const unlikePost = usePostStore(state=>state.unlikePost)
    const likeUnllike= async()=>{
        try {

                const postRef= doc(firestore,"posts",post.id)
                await updateDoc(postRef,{
                    likes: liked? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
                })
                if(!liked)
                {
                    likePost(post.id,authUser.uid)
                }
                else
                {
                    unlikePost(post.id,authUser.uid)
                }
                liked ? setCount(prev=>prev-1) : setCount(prev=>prev+1)
                setLiked(prev=>!prev)
                
                // if(post.likes.includes(authUser.uid))
                // {
                //     setLiked(false)
                //     await updateDoc(doc(firestore,"posts",post.id),{
                //         likes: arrayRemove(authUser.uid)
                //     })
                //     post.likes.filter((_,idx)=>(idx!=authUser.uid));
                //     setCount(prev=>prev-1);
                // }
                // else
                // {
                //     setLiked(true)
                //     await updateDoc(doc(firestore,"posts",post.id),{
                //         likes: arrayUnion(authUser.uid)
                //     })
                //     post.likes.push(authUser.uid)
                //     setCount(prev=>prev+1)
                // }
            
        } catch (error) {
            showToast("Error",error.message,"error")
        }
    }
    return {likeUnllike,liked,setLiked,likeCount,setCount};
}

export default useLikeUnlike