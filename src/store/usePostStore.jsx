import { create } from "zustand"

const usePostStore = create((set)=>({
    posts:[],
    createPost:(post)=> set(state=>({posts:[post,...state.posts]})),
    setPosts:(posts)=>set({posts}),
    addComment:(postID,comment)=>set(state=>({posts: state.posts.map((post)=>{
        if(post.id===postID)
        {
            return {
                ...post,
                comments:[...post.comments,comment]
            }
        }
        else
        return post;
    })})),
    likePost:(postID,userID)=>set(state=>({posts: state.posts.map((post)=>{
        if(post.id==postID)
        {
            return{
                ...post,
                likes:[...post.likes,userID]
            }
        }
        else
        return post
    })})),
    unlikePost:(postID,userID)=>set(state=>({posts: state.posts.map((post)=>{
        if(post.id==postID)
        {
            return{
                ...post,
                likes: post.likes.filter((id)=>id!=userID)
            }
        }
        else
        return post
    })})),
}))

export default usePostStore