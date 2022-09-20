import React from 'react';
import "./Navbar.css";
import cv from "../../media/CV_Andres-Dalla-Pozza.pdf";

const Navbar = ({isScrolling}) => {

const toTheTop = () => {
    window.scrollTo({ top:0, left:0, behavior: "smooth"});
};

const toInicio = () => {
  window.scrollTo({ top:0, left:0, behavior: "smooth"});
};

const toPortfolio = () => {
  window.scrollTo({ top:1100, left:0, behavior: "smooth"});
};

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>ANDRES DALLA POZZA</div>
        <div className='center'>
          <div onClick={toInicio} className='separation navbar-logo'>Home</div>
          <div className='separation navbar-logo' onClick={toPortfolio}>Portfolio</div>
          {/* <div className='separation navbar-logo'>Skills</div> */}
        </div>
        <a className='navbar-logo' href={cv} download>DOWNLOAD CV</a>
    </nav>
  )
}

export default Navbar