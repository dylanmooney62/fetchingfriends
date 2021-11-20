import React, { useState } from 'react';
import { InputGroup } from '../InputGroup';

export const LoginForm = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="text-center flex-1">
      <h2 className="font-bold text-xl mb-4">Login to your existing account</h2>
      <form action="#">
        <InputGroup
          label="Email Address"
          onChange={(value) => setEmail(value)}
          value={email}
          placeholder="Your email"
        />
        <InputGroup
          label="Password"
          onChange={(value) => setEmail(value)}
          value={email}
          placeholder="Your password"
        />
        <button className="btn btn-primary mt-4 btn-block">Sign in</button>
        <div className="divider opacity-10"></div>
      </form>
    </div>
  );
};
