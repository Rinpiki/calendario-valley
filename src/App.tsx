import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#D9F4FF] flex flex-col w-[319px] h-[500px] max-w-4xl ">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
