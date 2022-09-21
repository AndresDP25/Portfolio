import React, {useState} from 'react'
import './CarouselCertificates.css';
import desarrollo_web from "../../media/1.png";
import java_script from "../../media/2.png";
import react from "../../media/3.png";
import carrera from "../../media/4.png";


const CarouselCertificates = () => {
  return (
    <div id="carouselExampleControls" className="carousel1 slide" data-bs-ride="carousel">
        <h2 className='mb-5'>CERTIFICATES</h2>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={desarrollo_web} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={java_script} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={react} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={carrera} className="d-block w-100" alt="..."></img>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    
  )
}

export default CarouselCertificates