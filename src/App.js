import logo from './logo.svg';
import './App.css';
import Layout from './js/Layout';
import React from 'react';
import ReactDom from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
