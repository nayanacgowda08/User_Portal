import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import UserLogin from './Components/UserLogin';
import UserDetails from './Components/UserDetails';
import UserProfile from './Components/UserProfile';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar on every page except the landing page ("/") */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userportal" element={<Home />} />
        <Route path="/userportal/users" element={<Users />} />
        <Route path='/userportal/users/:id' element={<UserLogin/>} />
        <Route path='/userportal/details/:id' element={<UserDetails/>} />
        <Route path='/userportal/profile/:id' element={<UserProfile/>} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;
