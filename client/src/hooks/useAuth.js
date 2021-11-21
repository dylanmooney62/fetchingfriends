import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { user, register, login, logout, initializing } =
    useContext(AuthContext);

  return {
    register,
    user,
    login,
    logout,
    initializing,
  };
};
