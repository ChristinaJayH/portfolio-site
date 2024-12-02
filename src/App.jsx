import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import Navbar from './components/navbar';
function App() {
  return (
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/info-page" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
