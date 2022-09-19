import React, { useState } from "react";

const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
