import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (email, pass,name) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleSignIn = async (email, pass) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pass);
  };
  const handleSignOut = async () => {
    setLoading(true);
    return await signOut(auth);
  };
  const handleUpdate = async (name) => {
    return await updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  useEffect(() => {
    const unSubScribe = () => {
      setLoading(true);
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      });
    };
    return () => unSubScribe();
  }, [auth]);

  const authInfo = {
    handleSignUp,
    handleSignIn,
    handleSignOut,
    user,
    handleUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
