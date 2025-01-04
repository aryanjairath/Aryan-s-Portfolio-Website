import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
const HeaderSocials = () => {
 const{isLight, LightMode, DarkMode} = useContext(ThemeContext);
 const theme = isLight ? LightMode: DarkMode;
  return (
    <div className = 'header_socials' style = {{color: theme.text}} >
        <a href = 'https://www.linkedin.com/in/aryan-jairath-1436a320a/' style = {{color: theme.text}}><BsLinkedin /></a>
        <a style = {{color: theme.text}} href = 'https://github.com/aryanjairath' target = "https://github.com/aryanjairath"><AiFillGithub/></a>

    </div>
  )
}

export default HeaderSocials