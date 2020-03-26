import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Transition from './components/Transition';

function App() {
  return (
    <Router>
      <Nav />
      <Transition />
    </Router>
  );
}

export default App;
