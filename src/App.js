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
import UserInfo from './Component/UserInfo/UserInfo';
import UserPosts from './Component/UserPosts/UserPosts';
import UserJobs from './Component/UserJobs/UserJobs';
import JobDetails from './Component/JobDetails/JobDetails';
import Bookmark from './Component/Bookmark/Bookmark';


function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="browseJobs/*" element={<BrowseJobs />} />

          <Route path="/about" element={<About />} />

          <Route path="/blogs" element={<PrivateRoute><Blogs/></PrivateRoute>} />

          <Route path="jobDetails/:productId" element={<PrivateRoute> <JobDetails/> </PrivateRoute>}/>

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/postjob" element={<Postjob />} />

          <Route path="/profile" element={<UserProfile />}>

            <Route path='/profile/user-info' element={<UserInfo />}/>

            <Route path='/profile/user-jobs' element={<UserJobs/>}/>

            <Route path='/profile/user-posts' element={<UserPosts/>}/>

            <Route path='/profile/user-bookmarks' element={<Bookmark/>}/>


          </Route>

        </Routes>

        <Footer />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
