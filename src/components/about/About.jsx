import React from 'react';
import "./About.css";
import cv from "../../media/CV_Andres-Dalla-Pozza.pdf";
import image_cv from "../../media/CV-T.jpeg"

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-desc">
            <h3>Let me tell you something about me</h3>
            <p>
              I consider myself a very passionate and hard-working person, always looking for new challenges. I am organized, constant and responsible.
            </p>
            <a className='btn btn-outline-secondary' href={cv} download>DOWNLOAD CV</a>
        </div>
        <div className="about-img">
            <img className='imagen' src={image_cv} alt="about" />
        </div>
    </div>
  )
}

export default About