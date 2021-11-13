import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Page/Login/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  //Register User
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //set user to db
        saveUsersToDataBase(email, name, "POST");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
        history.push("/");
      })
      .finally(() => setIsLoading(false));
  };

  //google signIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUsersToDataBase(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logInUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //signOut
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  //admin checking
  useEffect(() => {
    fetch(`https://shielded-anchorage-63737.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const saveUsersToDataBase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://shielded-anchorage-63737.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    error,
    admin,
    registerUser,
    logInUser,
    logOut,
    isLoading,
    signInWithGoogle,
  };
};

export default useFirebase;
