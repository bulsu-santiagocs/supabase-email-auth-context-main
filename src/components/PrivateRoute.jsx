import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth();

  if (session === undefined) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  // If there's no session, redirect to the sign-in page
  return <div>{session ? <>{children}</> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;