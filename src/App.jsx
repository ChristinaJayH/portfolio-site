import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/footer'
import HomePage from './pages/Home';
import AboutPage from './pages/About'
function App() {
  return (
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
