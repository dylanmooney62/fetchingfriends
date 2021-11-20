import React from 'react';
import { LoginForm } from '../components/LoginForm';

const Login = () => {
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
