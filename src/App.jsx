import React from 'react';
import './index.css';  // or the path to your custom CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/footer'
import HomePage from './pages/Home';
import AboutPage from './pages/About'
import OurTeam from './pages/OurTeam'
import { ContactUs } from './pages/Contact'
function App() {
  return (
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
