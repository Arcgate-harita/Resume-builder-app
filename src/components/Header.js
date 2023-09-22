import React from 'react'
import '../components/Header.css';
import image from './images.png';

function Header() {
  return (
    <div className='header'>
        <h1 className='heading'>Build Your <span>Resume</span> Here!</h1>
        <img src={image} className='resume-image'></img>
    </div>
  )
}

export default Header;
