import { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/usePostStore";

const useFetchFeedPosts = () => {
    const showToast=useShowToast();
    const authUser = useAuthStore(state=>state.user)
    const [isUpdating,setUpdating]=useState(true)
    const posts = usePostStore((state) => state.posts);
    const setPosts = usePostStore((state) => state.setPosts);
    useEffect(()=>{
    const getPosts = async()=>{
        setUpdating(true)
        if(authUser.following.length==0)
        {
            setUpdating(false)
            setPosts([])
            return;
        }
        const q= query(collection(firestore,"posts"),where("createdBy","in",authUser.following))
        try {
            const querySnapshot = await getDocs(q);
            const newposts=[]
            querySnapshot.forEach((doc)=>{
                newposts.push({...doc.data(),id:doc.id})
            })
            newposts.sort((a,b)=>b.createdAt-a.createdAt)
            setPosts(newposts)
            console.log(posts)
            
        } catch (error) {
            showToast("Error",error.message,"error")   
        }
        finally{
            setUpdating(false)
        }
    }
    getPosts();
    },[authUser])
    return {posts,isUpdating}
}

export default useFetchFeedPosts