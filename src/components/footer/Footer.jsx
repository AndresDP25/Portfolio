import React from 'react'
import "./Footer.css";



const footer = () => {
  return (
    <div className='footerContainer d-flex flex-column text-center justify-content-center'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f9fafb" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,122.7C840,107,960,85,1080,85.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div>
      <a href="https://github.com/AndresDP25?tab=repositories">
        <button className='btn btn-primary icons'>
          <i className="fa-brands fa-square-git iconFont"></i>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/andres-dalla-pozza-b27106224/">
        <button className='btn btn-primary icons'>
          <i className="fa-brands fa-linkedin iconFont"></i>
        </button>
      </a>      
    </div>
      <div className='copy'>Designed and built by Andrés Dalla Pozza</div>
      <div className='copy mb-4'>© copyright 2022 All rights reserved</div>
    </div>
  )
}

export default footer


// hover:text-sky-600 font-bold duration-200 ease-linear