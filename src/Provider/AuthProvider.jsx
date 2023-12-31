import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.confiq";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);

      // get and set token
      if (currentUser) {
        axios
          .post("https://assignment12-server-psi.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // create new user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   update user data
  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Succesfully Added");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   signIn with email & pass
  const SignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   for logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // google login
  const googleSignIn = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // console.log(user);

  const authInfo = {
    user,
    loader,
    createUser,
    updateUserData,
    SignIn,
    logout,
    googleSignIn,
    setLoader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
