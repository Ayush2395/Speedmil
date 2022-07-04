import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../backend/firebase.config";

const API = createContext();

export default function AppState({ children }) {
  // error message state
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleErrorMessage = (err) => {
    if (err.code) {
      if (err.code === "auth/user-not-found")
        setMessage({ error: true, msg: "User not found" });
    }
  };

  // authentication
  const [user, setUser] = useState("");

  const registerNewUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser);
      })
      .catch((err) => console.log(err));
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => {
        unsub();
      };
    });
  }, []);


  return (
    <>
      <API.Provider
        value={{
          user,
          message,
          userLogOut,
          setMessage,
          registerNewUser,
          loginUser,
          googleSignIn,
          handleErrorMessage,
        }}
      >
        {children}
      </API.Provider>
    </>
  );
}

export const useAppState = () => {
  return useContext(API);
};
