import React from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Footer } from './components/Footer';

const App = () => {
  const { initializing } = useAuth();

  // Implement react spinner
  if (initializing) {
    return null;
  }

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto mt-12 px-4 mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
