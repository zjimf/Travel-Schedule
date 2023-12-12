// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const AuthContext = createContext();

const CheckUserIsLogin = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user ? true : false);
    });
  });
};

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserIsLogin = async () => {
      try {
        const loggedIn = await CheckUserIsLogin();
        setIsUserLoggedIn(loggedIn);
      } catch (error) {
        console.error("Error checking user login:", error);
      }
    };

    fetchUserIsLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
