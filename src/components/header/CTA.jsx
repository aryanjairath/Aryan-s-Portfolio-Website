import React from 'react'
import C from '../../assets/Aryan_Jairath_s_Resume.pdf'
const CTA = () => {
  return (
    <div className ="cta">
        <a href = {C} className = 'btn'>Download CV </a>
        <a href="#contact" className = 'btn'>Let's Talk</a>

    </div>
  )
}

export default CTA