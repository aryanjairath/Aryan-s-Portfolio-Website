import React from 'react'
import './portfolio.css'
import Paint from '../../assets/PaintProgram.png'
import MusicBox from '../../assets/MusicBox.png'
import maze1 from '../../assets/Maze3d.png'
import cafe from '../../assets/rucafe.png'
import tuition from '../../assets/tuitonmanager.jpg'
import Calc from '../../assets/phoneImg.png'
import DOB from '../../assets/DOB.png'
import reactIc from '../../assets/myWebsite.png'

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
const Portfolio = () => {
  return (
    <section id = 'portfolio'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
        </ScrollAnimation>
        <div className="container portfolio_container">
            <article className='portfolio_item'>
                <h3>Android RU Cafe</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {cafe} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/Cafe-App' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
            <article className='portfolio_item'>
                <h3>College Tuition Manager (GUI)</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {tuition} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/TuitionManager' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
            <article className='portfolio_item'>
                <h3>2/3 Dimensional Maze Project</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {maze1} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/JavaFXProjects' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>

            <article className='portfolio_item'>

                <h3>Music Box (Music Player)</h3>
                
                <div className = 'portfolio_item-image'>
                    <img src = {MusicBox} alt = ''></img>
                </div>
                <div className = "portfolio_item-cta">
                    <a href='https://github.com/aryanjairath/JavaFXProjects' className ='btn' target = '_blank'>Github</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <h3>GUI/Paint Simulation</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {Paint} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/JavaFXProjects' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
            <article className='portfolio_item'>
                <h3>This React Portfolio Website</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {reactIc} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/react-portfolio-website-1' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
            <article className='portfolio_item'>
                <h3>Android Calculator App</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {Calc} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/CalculatorApp' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
            <article className='portfolio_item'>
                <h3>Android DOB Calculator</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {DOB} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/DOBCalc.git' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>

        </div>
    </section>
  )
}

export default Portfolio