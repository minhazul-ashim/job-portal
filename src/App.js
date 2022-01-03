import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import BrowseJobs from './Component/BrowseJobs/BrowseJobs/BrowseJobs';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Postjob from './Component/Postjob/Postjob';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import UserProfile from './Component/UserProfile/UserProfile';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browseJobs" element={<BrowseJobs/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<PrivateRoute><Blogs></Blogs></PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/postjob" element={<Postjob />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
