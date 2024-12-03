import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pages from './Pages';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';


const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
