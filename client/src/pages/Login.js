import React from 'react';
import { Navigate } from 'react-router';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex space-y-10 lg:space-y-0 flex-col max-w-lg lg:flex-row w-full lg:max-w-5xl mx-auto">
      <LoginForm />
      <div className="hidden lg:flex divider divider-vertical opacity-10"></div>
      <div className="divider opacity-40 lg:hidden">OR</div>
      <SignupForm />
    </div>
  );
};

export default Login;
