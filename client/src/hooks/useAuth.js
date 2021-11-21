import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { user, login, logout, initializing } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
    initializing,
  };
};
