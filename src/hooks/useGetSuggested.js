import { useCallback, useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/useAuthStore";

const useGetSuggested = () => {
  const [isUpdating, setUpdating] = useState(false);
  const showToast = useShowToast();
  const [sUsers, setSUsers] = useState([]);
  const authUser = useAuthStore((state) => state.user);

  const removeUser = useCallback((uid) => {
    setSUsers((prevUsers) => prevUsers.filter((user) => user.uid !== uid));
  }, []);

  useEffect(() => {
    const getSuggested = async () => {
      setUpdating(true);
      try {
        const to_check=[];
        if(sUsers.length!=0)
            {
                sUsers.forEach((u)=>to_check.push(u.uid));
            }
        const q = query(
          collection(firestore, "users"),
          where("uid", "not-in", [
            authUser.uid,
            ...authUser.following
          ]),
          limit(3)
        );
        const qSnap = await getDocs(q);
        const users=[];
        qSnap.forEach((doc) => {
          users.push({...doc.data(), id: doc.id });
        });
        // setSUsers([...sUsers,users]);
        setSUsers(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setUpdating(false);
      }
    };
    if(authUser)
        getSuggested();
  }, [authUser]);

  return {sUsers,isUpdating,removeUser};
};

export default useGetSuggested;
