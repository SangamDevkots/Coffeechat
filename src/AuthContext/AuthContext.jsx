

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  const setUserAndLocalStorage = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const signOutUser = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const currentuser = {
    user,
    setUser: setUserAndLocalStorage,
    signOut: signOutUser,
  };

  return <AuthContext.Provider value={currentuser}>{children}</AuthContext.Provider>;
};

export default AuthContext;