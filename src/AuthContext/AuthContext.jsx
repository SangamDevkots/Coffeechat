
import React, { createContext, useState, useEffect, useContext } from 'react';

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
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const signOutUser = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const currentUser = {
    user,
    setUser: setUserAndLocalStorage,
    signOut: signOutUser,
  };

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
