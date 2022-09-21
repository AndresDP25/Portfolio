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
    
    <nav className="navbar">
      <div className= {`container-fluid navBar navbar-expand-lg bg-black navbar-dark ${isScrolling > 20 ? "scrolling" : null}`}>
        <a className="navbar-brand navbar-logo" onClick={toTheTop}>ANDRES DALLA POZZA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse separation navbar-logo" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active separation navbar-logo" aria-current="page" onClick={toInicio}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active separation navbar-logo" aria-current="page" onClick={toPortfolio}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active separation navbar-logo" aria-current="page" href={cv} download>DOWNLOAD CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
    
  )
}

export default Navbar