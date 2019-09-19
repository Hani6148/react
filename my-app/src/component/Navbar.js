import React from "react";
import "./Navbar.css";
const Navbar = props=>(

    <nav className="navbar"> 
     
    <ul>
    <li className="brand">Click It</li>
    <li>{props.message || "lests play"} </li>
    <li>Score: {props.score} </li>
    </ul>
   



    </nav>
)  

export default Navbar;