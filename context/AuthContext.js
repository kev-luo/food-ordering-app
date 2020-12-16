import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";

const AuthContext = React.createContext({ user: null, isAuthenticated: false })

export const AuthProvider = ({ children }) => {
  // grab token from cookie
  // if token exists authenticate the token on the server and set user object

  

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}