import React from 'react';
import { Navbar } from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <a href="/test" className="btn btn-primary">
      Hello world
    </a>
  </div>
);

export default App;
