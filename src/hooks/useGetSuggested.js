import { useCallback, useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/useAuthStore";

const useGetSuggested = (page) => {
  const [isLoading, setLoading] = useState(true);
  const showToast = useShowToast();
  const [sUsers, setSUsers] = useState([]);
  const authUser = useAuthStore((state) => state.user);

  const removeUser = useCallback((uid) => {
    setSUsers((prevUsers) => prevUsers.filter((user) => user.uid !== uid));
  }, []);

  useEffect(() => {
    const getSuggested = async () => {
      setLoading(true);
      try {
        const q = query(collection(firestore, "users"));
        const qSnap = await getDocs(q);
        let users = [];
        qSnap.forEach((doc) => {
          users.push({ ...doc.data()});
        });

        const filteredUsers = users.filter(user => ![authUser.uid, ...authUser.following].includes(user.uid));
        if (page === "Suggested") {
          setSUsers(filteredUsers.slice(0, 10));
        } else {
          setSUsers(filteredUsers.slice(0, 4));
        }

      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    if (authUser) {
      getSuggested();
    }
  }, [authUser, page, showToast]);

  return { sUsers, removeUser, isLoading };
};

export default useGetSuggested;
