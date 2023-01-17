import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Aryan Jairath</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            <HeaderSocials/>
    <div className = "me">
        <img src= {ME} alt = "me" />
        <a href = "#contact" className='scroll_down'>Scroll Down</a>

    </div>
    </div>

    </header>
  );
}

export default Header