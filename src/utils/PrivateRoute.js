import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = getAuth();
    console.log(isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  function getAuth(){
    console.log(localStorage);
    return localStorage.getItem('authTokens') !== null;
  }