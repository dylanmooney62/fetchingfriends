import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  // Attempt authentication on mount to keep user signed on refresh
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.get('/api/v1/auth/user');
        setUser(user);
      } catch (error) {
        // Fails if user is not logged in which is okay
      } finally {
        setInitializing(false);
      }
    })();
  }, []);

  // Possibly use callback for cleaner looking code
  const login = async ({ email, password }) => {
    await axios.post('/api/v1/auth/login', { email, password });

    const {
      data: { user },
    } = await axios.get('/api/v1/auth/user');

    setUser(user);
  };

  const logout = async (callback) => {
    await axios.post('/api/v1/auth/logout').catch((error) => {});
    setUser(null);
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};
