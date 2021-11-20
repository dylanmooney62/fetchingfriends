import React from 'react';
import { Navigate, useLocation } from 'react-router';

export const RequireAuth = ({ children }) => {
  const location = useLocation();

  const isAuth = false;

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
