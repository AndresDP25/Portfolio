import React from 'react';
import './Certificates.css';
import images from '../../exports/images';

const certificates = () => {
  return (
    <div className='CertificatesContainer container'>
      <div className='Certificates mb-3 ms-3'>CERTIFICATES:</div>
      <div className='CertificatesImg'>
      {images.map(image => (
        <div className='item'>
          <img src={image} alt='' />
        </div>
      ))}
      </div>
    </div>
  )
}

export default certificates