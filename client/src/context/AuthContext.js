import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const authenticate = async () => {
    await new Promise((res, rej) => {
      axios
        .get('/api/v1/auth/user')
        .then(({ data: { user } }) => {
          setUser(user);
          res();
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  // Attempt authentication on mount to keep user signed on refresh
  useEffect(() => {
    (async () => {
      try {
        await authenticate();
      } catch (error) {
        // Fails if user is not logged in which is okay
      } finally {
        setInitializing(false);
      }
    })();
  }, []);

  // This needs refactored
  const register = async ({ email, username, password }) => {
    await axios
      .post('/api/v1/auth/register', { email, username, password })
      .then(authenticate);
  };

  // Possibly use callback for cleaner looking code
  const login = async ({ email, password }) => {
    await axios
      .post('/api/v1/auth/login', { email, password })
      .then(authenticate);
  };

  const logout = async (callback) => {
    await axios.post('/api/v1/auth/logout');
    setUser(null);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initializing }}
    >
      {children}
    </AuthContext.Provider>
  );
};
