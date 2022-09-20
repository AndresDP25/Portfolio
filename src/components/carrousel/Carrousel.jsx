import React, { useState } from 'react';
import './Carrousel.css';
import images from '../../exports/images';
import {motion} from 'framer-motion';

const Carrousel = () => {
    
  return (
    <motion.div className='carrouselContainer'>
      <motion.div className='carrousel' drag='x' dragConstraints={{right:200}}>
      {images.map(image => (
        <motion.div className='item'>
          <img src={image} alt='' />
        </motion.div>
      ))}
      </motion.div>
      
    </motion.div>
  )
}

export default Carrousel