import React, {useState} from 'react'
import './Carousel.css';
import almacen_saludable from "../../media/almacen_saludable.png";
import colegio_sanfrancisco from "../../media/colegio_sanfrancisco.png";
import hamburguerseria from "../../media/hamburguerseria.png";
import rickandmorty from "../../media/rickandmorty.png";


const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <h2 className='mb-5'>SOME OF MY PROJECTS</h2>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={almacen_saludable} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={colegio_sanfrancisco} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={hamburguerseria} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src={rickandmorty} className="d-block w-100" alt="..."></img>
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

export default Carousel