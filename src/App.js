import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} 
        />
           <Route path="/info-page" element={<InfoPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
