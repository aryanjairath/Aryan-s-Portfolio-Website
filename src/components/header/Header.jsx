import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg.jpg'
import HeaderSocials from './HeaderSocials'
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react'
import { BiSolidBulb } from 'react-icons/bi'
import { CgBulb } from 'react-icons/cg'
const Header = () => {
  const {isLight, DarkMode, LightMode, toggleMode} = useContext(ThemeContext);
  const theme = isLight ? LightMode: DarkMode;
  return (
    <header>
        <div className="container header_container">
          <button onClick={() => toggleMode()} style ={{borderRadius:'1rem'}}><h3><BiSolidBulb /></h3></button>
            <h1 style = {{color: theme.text}}>Aryan Jairath</h1>
            <h4 className='text-light'>SOFTWARE ENGINEER</h4>
            <a href = "#contact" className='scroll_down'>Scroll Down</a>

            <CTA />
            <HeaderSocials/>
    <div className = "me">
        <img src= {ME} alt = "me" />

    </div>
    </div>

    </header>
  );
}

export default Header