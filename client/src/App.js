import React from 'react';
import { Navbar } from './components/Navbar';

const App = () => (
  <div className="font-sans">
    <Navbar />
    <a href="/test" className="btn btn-primary">
      Hello
    </a>
  </div>
);

export default App;
