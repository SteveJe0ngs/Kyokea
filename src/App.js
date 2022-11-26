import './App.css';
import Explore from './js/Explore';
import LandingPage from './js/LandingPage';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<Explore />} />
            <Route path="/analysis" element={<Explore />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
