import React from 'react'
import './Works.css';
import almacen_saludable from "../../media/almacen_saludable.png";
import colegio_sanfrancisco from "../../media/colegio_sanfrancisco.png";
import hamburguerseria from "../../media/hamburguerseria.png";
import rickandmorty from "../../media/rickandmorty.png";

const Works = () => {
  return (
    <div className='WorksContainer container'>
        <div className='projects mb-3 ms-3'>SOME OF MY PROJECTS:</div>
      <div className='Works'>
        <div className='item'>
            <a href="https://almacen-saludable.netlify.app/"><img src={almacen_saludable} alt="" /></a>
        </div>
        <div className='item'>
            <a href="https://dashing-sherbet-82fcf8.netlify.app/"><img src={colegio_sanfrancisco} alt="" /></a>
        </div>
        <div className='item'>
            <a href="https://quirky-jennings-a9254b.netlify.app/"><img src={hamburguerseria} alt="" /></a>
        </div>
        <div className='item'>
            <a href="https://rickandmortyrrd-v5.netlify.app/"><img src={rickandmorty} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Works