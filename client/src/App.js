import React from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

const App = () => (
  <div className="font-sans flex flex-col min-h-screen bg-base-100">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default App;
