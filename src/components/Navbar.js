import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/wizard.gif";
import Shelf from "../assets/shelf.webp";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="shelf"/>
          <div>
          <h1 id="title">Pixel Wizard Studios</h1>
        </div>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/websites"> Websites </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/websites"> Websites </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <img src={Shelf} alt="shelf"/>
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;