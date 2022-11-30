import './App.css';
import Explore from './js/Explore';
import LandingPage from './js/LandingPage';
import Detail from './js/Detail';
import Result from './js/Result';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Analysis from './js/Analysis';
import About from './js/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/analysis/result" element={<Result />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:name" element={<Detail />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
