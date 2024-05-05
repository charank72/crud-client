import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const checkAuth = async () => {
    await axios(`/api/user/read`)
      .then((res) => {
        if (res.data.user.role === "user") setIsUser(true);
        if (res.data.user.role === "admin") setIsAdmin(true);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    checkAuth();
  }, [isAdmin, isUser]);

  return (
    <div>
      <AuthContext.Provider
        value={{ isAdmin, isUser, setIsAdmin, setIsUser }}
      >{props.children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
