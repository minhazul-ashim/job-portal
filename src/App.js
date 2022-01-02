import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';
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
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
