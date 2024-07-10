import React from 'react'
import { create } from 'zustand'

const useProfileStore = create((set)=>({
        userProfile:null,
        setUserProfile:(userProfile) =>set({userProfile}),
        addPost : (post)=> set(state=>({
            userProfile: {...state.userProfile,posts:[post.id,...state.userProfile.posts]}
        })),
        deletePost : (id)=>set(state=>({userProfile: {...state.userProfile,posts: state.userProfile.posts.filter((ind)=>ind!=id)}}))
    }))

export default useProfileStore