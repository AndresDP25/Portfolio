import React from 'react';
import "./About.css";
import cv from "../../media/CV_Andres-Dalla-Pozza.pdf"

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-desc">
            <h3>Let me tell you something about me</h3>
            <p>
              I am a person very passionate about work, it is one of my pillars. I like new challenges. I am very organized and constant.
            </p>
            <a className='btn btn-outline-secondary' href={cv} download>DOWNLOAD CV</a>
        </div>
        <div className="about-img">
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="about" />
        </div>
    </div>
  )
}

export default About