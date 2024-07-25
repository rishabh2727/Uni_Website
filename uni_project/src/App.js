import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import food from './Components/pages/food';
import Events from './Components/pages/Campus_Events';
import Libraries from './Components/Libraries';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path = '/Library' Component={Libraries} />
          <Route path = '/food' Component={food} />
          <Route path = '/Campus_Events' Component={Events} />
          </Routes>
      </Router>
    </>
  );
}

export default App;