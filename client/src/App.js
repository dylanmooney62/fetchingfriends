import React from 'react';
import { Navbar } from './components/Navbar';

import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="font-sans">
    <Navbar />
    <main className="container mx-auto mt-6">
      <Outlet />
    </main>
  </div>
);

export default App;
