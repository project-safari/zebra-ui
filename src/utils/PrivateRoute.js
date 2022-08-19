import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = true;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  function getAuth(){
    return localStorage.getItem('authTokens') !== null;
  }