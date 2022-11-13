import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lyalogo.png";

//hooks
export default function Nav() {
  const [open,setOpen] = useState(false);
  
  return (
    <div>
      <nav className="nav">
        {/* <h1>Nicky.js`s Page</h1> */}
        <img src={logo} alt="logo" className="logo"/>
        <ul className={open ? "nav-links active":"nav-links"}>
          <li>
            {" "}
            <Link to="/header">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <li
          className={open ? "fas fa-bars close" : "fas fa-bars open"}
          onClick={() => setOpen(true)}
        >==</li>
        <li
          className={open ? "fas fa-times open" : "fas fa-times close"}
          onClick={() => setOpen(false)}
        >X</li>  
      </nav>
    </div>
      
  );
}
