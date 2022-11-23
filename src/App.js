import logo from './logo.svg';
import './App.css';
import Layout from './js/Layout';
import React from 'react';
import ReactDom from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Example = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/main" element={<Example />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
