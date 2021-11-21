import React from 'react';
import { Navigate } from 'react-router';
import { LoginForm } from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-row w-full max-w-5xl mx-auto">
      <LoginForm />
      <div className="divider divider-vertical opacity-10"></div>
      <div className="shadow-lg flex-1">
        <h2>Sign up form</h2>
      </div>
    </div>
  );
};

export default Login;
