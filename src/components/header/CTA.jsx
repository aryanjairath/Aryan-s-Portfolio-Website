import React from 'react'
import C from '../../assets/Aryan_Jairath_Official_Resume.pdf'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
const CTA = () => {
  const {isLight, DarkMode, LightMode} = useContext(ThemeContext);
  const theme = isLight ? LightMode: DarkMode;  
  
  return (
    <div className ="cta">
        <a href = {C} style = {{color: theme.text}}className = 'btn'>Resume</a>
        <a href="#contact" style = {{color: theme.text}} className = 'btn'>Contact Me</a>

    </div>
  )
}

export default CTA