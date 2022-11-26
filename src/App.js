import './App.css';
import Explore from './js/Explore';
import LandingPage from './js/LandingPage';
import Detail from './js/Detail';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Analysis from './js/Analysis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<LandingPage />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:name" element={<Detail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
