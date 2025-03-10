import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
const Footer = () => {
  const {isLight, LightMode, DarkMode} = useContext(ThemeContext);
  const theme = isLight ? DarkMode : LightMode
  return (
    <footer style = {{backgroundColor: theme.text}}>
    <a href = "#" className = 'footer_logo'>Developed by Aryan Jairath</a>

    <ul className='permalinks' >
      <li><a href = '#'>Home</a></li>
      <li><a href = '#about'>About</a></li>
      <li><a href = '#work'>Work</a></li>
      <li><a href = '#experience'>Experience</a></li>
      <li><a href = '#portfolio'>Portfolio</a></li>
      <li><a href = '#contact'>Contact</a></li>

    </ul>
    <div className = 'footer_socials'>
        <a href = 'https://www.linkedin.com/in/aryan-jairath-1436a320a/' target = "_blank" style = {{backgroundColor:theme.text}}><BsLinkedin /></a>
        <a href = 'https://github.com/aryanjairath' target = "_blank" style = {{backgroundColor:theme.text}}><AiFillGithub/></a>
    </div>
    <div className='footer_copyright'>
      <small>&copy; Aryan Jairath. All Rights Reserved.</small>
    </div>
    </footer>
  )
}

export default Footer