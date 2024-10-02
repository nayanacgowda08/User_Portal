// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar-conatiner">
        <div className="links">
        <ul>
          <li>
            <Link to="/userportal" >Home</Link>
          </li>
          <li>
          <Link to="/userportal/users" >Users</Link>
          </li>
          <li>
          <Link to="/" >Logout</Link>
          </li>
        </ul>
        </div>
        </div>  
    </>
  )
}

export default Navbar