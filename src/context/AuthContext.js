import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // user data
  const [user, setUser] = useState({});

  // When User Signup
  const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', email), {
      saveShows:[]
    })
  };
  // When User Sign In
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // When User Logout
  const logOut = () => {
    return signOut(auth);
  };

  // checking user logged in or not
  useEffect(() => {
    const userLogged = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      userLogged();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
