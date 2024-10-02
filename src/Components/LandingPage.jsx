// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/Styles/landingPage.css"
// import img from "../assets/Images/bg.jpg"

const LandingPage = () => {
    const navigate = useNavigate();
  const uname = useRef();
  const pswd = useRef();

  const username = "admin";
  const password = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (uname.current.value === username && pswd.current.value === password) {
      navigate("/userportal"); 
    } else {
      alert("Invalid credentials");
    }
  };
  return (
   <>
   
   <div className="bg">
    
  <div className="container">
  <div className="title">Admin Login</div>
      <div className="frm">
        <form onSubmit={handleLogin}>
          <input
            ref={uname}
            className=""
            type="text"
            placeholder="Enter email"
          />
          <input ref={pswd} type="password" placeholder="Enter password" />
          <button className="">
            Submit
          </button>
        </form>
      </div>
  </div>
    </div>
   </>
  )
}

export default LandingPage