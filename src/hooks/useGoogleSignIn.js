// useGoogleSignIn.js
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/useAuthStore';
import { useState } from 'react';

const useGoogleSignIn = () => {
  const showToast = useShowToast();
  const authLogin = useAuthStore((state) => state.loginUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
          const userDoc = {
            uid: user.uid,
            email: user.email,
            userName: user.email.split('@')[0],
            fullName: user.displayName,
            bio: '',
            profilePicURL: user.photoURL,
            followers: [],
            following: [],
            posts: [],
            createdAt: Date.now(),
          };

          await setDoc(userRef, userDoc);
          localStorage.setItem('user-info', JSON.stringify(userDoc));
          authLogin(userDoc);
          showToast('Login Successful', `Welcome ${user.displayName}`, 'success');
        } else {
          const userData = docSnap.data();
          localStorage.setItem('user-info', JSON.stringify(userData));
          authLogin(userData);
          showToast('Success', `Welcome ${user.displayName}`, 'success');
        }
      }
    } catch (error) {
      setError(error);
      showToast('Error', error.message, 'error');
    } finally {
      // setLoading(false);
    }
  };

  return { signInWithGoogle, loading, error };
};

export default useGoogleSignIn;
