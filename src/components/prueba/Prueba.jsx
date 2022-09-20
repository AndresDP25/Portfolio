import React from 'react';
import desarrolloWeb from "../../media/1.png";
import javaScript from "../../media/2.png";
import react from "../../media/3.png";
import front from "../../media/4.png";
import  './Prueba.css';

const Prueba = () => {
  return (
    <div className='prueba'>
        <img src={desarrolloWeb} alt="" />
        <img src={javaScript} alt="" />
        <img src={react} alt="" />
        <img src={front} alt="" />
    </div>
  )
}

export default Prueba