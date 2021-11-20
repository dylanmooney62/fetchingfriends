import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  const login = () => {
    setUser({ username: 'john', hello: 'g' });
  };

  const logout = () => {
    setUser({ username: 'john', hello: 'g' });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
