import React from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { initializing } = useAuth();

  // Implement react spinner
  if (initializing) {
    return null;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main className="container mx-auto mt-12 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
