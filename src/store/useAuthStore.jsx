import React from 'react'
import { create } from 'zustand'

const useAuthStore = create((set)=>({
    user:JSON.parse(localStorage.getItem("user-info")),
    loginUser:(user)=>set({user}),
    logoutUser:()=>set({user:null}),
    updateUser:(user)=>set({user})
  }))

export default useAuthStore