import React from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";

const PrivateRoute = ({ children }) => {
  const { session } = useSession();

  if (!session) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
