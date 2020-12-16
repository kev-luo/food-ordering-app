import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";

const AuthContext = React.createContext({ user: null, isAuthenticated: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const checkToken = async () => {
    
    // grab token from cookie
    const token = Cookie.get("token");
    // if token exists authenticate the token on the server and set user object
    if (token) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        Cookie.remove("token");
        setUser(null);
        return null;
      }
      const user = await res.json();
      setUser(user);
    }
  };

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
