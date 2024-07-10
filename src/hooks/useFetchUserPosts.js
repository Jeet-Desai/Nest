import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import usePostStore from "../store/usePostStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useGetUserProfilebyUsername from "./useGetUserProfilebyUsername";
import { useParams } from "react-router-dom";
import useProfileStore from "../store/useProfileStore";

const useFetchUserPosts = () => {
  const showToast = useShowToast();
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);
  const [isUpdating, setUpdating] = useState(true);
  const userProfile = useProfileStore((state) => state.userProfile);

  // Log userProfile to debug
  //   console.log("useFetchUserPosts: userProfile:", userProfile);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!userProfile) {
        return;
      }
      //   if (isUpdating) return;
      //   setUpdating(true);
      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnap = await getDocs(q);
        setPosts([]);
        let newPosts = [];
        querySnap.forEach((post) => {
          newPosts.push({ ...post.data(), id: post.id });
        });
        newPosts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(newPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setUpdating(false);
      }
    };

    fetchPosts();
  }, [userProfile]); // Add isLoading to dependencies

  return { posts, isUpdating };
};

export default useFetchUserPosts;
