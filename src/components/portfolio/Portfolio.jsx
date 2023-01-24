import React from 'react'
import './portfolio.css'
import Paint from '../../assets/PaintProgram.png'
import MusicBox from '../../assets/MusicBox.png'
import maze1 from '../../assets/Maze3d.png'
import Calc from '../../assets/phoneImg.png'
import DOB from '../../assets/DOB.png'
import backgroundVideo from '../../assets/nn.mp4'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            <article className='portfolio_item'>
                <h3>Maze Project</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {maze1} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/MazeProject.git' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>

            <article className='portfolio_item'>

                <h3>Music Box (Music Player)</h3>
                
                <div className = 'portfolio_item-image'>
                    <img src = {MusicBox} alt = ''></img>
                </div>
                <div className = "portfolio_item-cta">
                    <a href='https://github.com/aryanjairath/MusicBox.git' className ='btn' target = '_blank'>Github</a>
                </div>
            </article>

            <article className='portfolio_item'>
                <h3>GUI/Paint Simulation</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {Paint} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/GUI-Task.git' className ='btn' target = '_blank'>Github</a>
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
                <h3>Android DOBCalc</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {DOB} alt = ''></img>
                </div>
            <div className = "portfolio_item-cta">
                <a href='https://github.com/aryanjairath/DOBCalc.git' className ='btn' target = '_blank'>Github</a>
            </div>
            </article>
                <div className = 'portfolio_item-video'>
                    <video autoPlay loop muted id='video'>
                        <source src={backgroundVideo} type = 'video/mp4'/>
                    </video>
                </div>
        </div>
    </section>
  )
}

export default Portfolio