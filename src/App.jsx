import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AuthPage from "./components/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import useAuthStore from "./store/useAuthStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";


function App() {
    const Authenticated = useAuthStore((state)=>state.user)
    // const [Authenticated,loading,error]=useAuthState(auth);
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={Authenticated ? <HomePage /> : <Navigate to="/auth"/>} />
          <Route path="/auth" element={!Authenticated ? <AuthPage /> : <Navigate to="/"/>} />
          <Route path="/:username" element={<ProfilePage/>} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
