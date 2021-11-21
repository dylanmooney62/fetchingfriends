import React from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <div className="font-sans">
      <Navbar />
      <main className="container mx-auto mt-12 px-4">
        <Outlet />
      </main>
    </div>
  </AuthProvider>
);

export default App;
