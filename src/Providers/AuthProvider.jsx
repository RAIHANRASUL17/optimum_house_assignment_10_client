import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  //createUserWithEmailAndPassword
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInWithEmailAndPassword
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*_____________________________________________________________*/
  // toggle logOut and login(observer onAuthStateChanged)
  const [user, setUser] = useState(null);
  //remove loading to reduce login declare useState
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       //step-B.1 remove loading to reduce login
       setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  /*_____________________________________________________________*/
//signOut
  const logOut = ()=>{
    return signOut(auth)
  }

  // signIn/login google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  // github login
  const githubProvider= new GithubAuthProvider();
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
  }
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    googleSignIn,
    githubLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
