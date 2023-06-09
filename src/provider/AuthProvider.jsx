import { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

// firebase con
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /////////////////////
  // authentication///
  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser) {
      //   const loggerUser = { email: currentUser.email };
      //   const url = `https://server-car-doctor-exp-delwerhossain.vercel.app/jwt`;
      //   fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(loggerUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       localStorage.setItem("jwt", data.token);
      //     });
      // } else {
      //   localStorage.removeItem("jwt");
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // git login
  const signInWithGit = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };
  // logout
  const signOutLog = () => {
    setLoading(true);
    return signOut(auth);
  };

  //use name for authentication registration
  const updateUser = (name, UserPicUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: UserPicUrl,
    });
  };

  //////////////////////////////////
  // all auth sent in authContext//
  const authInfo = {
    user,
    loading,
    signIn,
    createUser,
    signInWithGoogle,
    signInWithGit,
    signOutLog,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
