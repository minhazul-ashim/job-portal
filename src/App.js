import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home/Home';
import Jobs from './Component/Jobs/Jobs';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Postjob from './Component/Postjob/Postjob';
import Register from './Component/Register/Register';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/jobs" element={<Jobs/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/postjob" element={<Postjob/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
