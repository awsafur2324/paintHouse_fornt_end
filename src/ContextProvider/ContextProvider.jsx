import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

//here we create a context what use in the ContextProvider
export const AuthProvider = createContext(null);

const ContextProvider = ({children}) => {
  //create a state of loader so that until the log in update it will show in **private router**
  const [isLoading, setIsLoading] = useState(true);

  //set the user on a state so that we can see them every where
  const [user, setUser] = useState(null);

  //===================Manual Log in & Registration ===================================

  //Register part with email & password
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Log in part with email & password
  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //======================================Google Log in==================================================================
  //create a google provider
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  //====================================Github log in ==================================================================
  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider)
  };

  // Observe the auth state or user state ...that the user still log in or not .. this process save the log in info
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user Data on auth observe - ", currentUser);
      //Here we set the current user who log in in this system
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);

  //sign out a user
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => toast.success("Log out successfully"))
      .catch(() => toast.error("Log out failed"));
  };

  const authData = {
    user,
    isLoading,
    createUser,
    signInUser,
    logOut,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <AuthProvider.Provider value={authData}>
      {children}
    </AuthProvider.Provider>
  );
};
ContextProvider.propTypes = {
    children : PropTypes.any
}
export default ContextProvider;
