import React, { useState } from 'react';
import './portfolio.css'
import Paint from '../../assets/PaintProgram.png'
import MusicBox from '../../assets/MusicBox.png'
import maze1 from '../../assets/Maze3d.png'
import cafe from '../../assets/rucafe.png'
import tuition from '../../assets/tuitonmanager.jpg'
import Calc from '../../assets/phoneImg.png'
import lifting from '../../assets/liftin.jpg'
import DOB from '../../assets/DOB.png'
import reactIc from '../../assets/myWebsite.png'
import interpret from '../../assets/interpret.png'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const items = [
        { title: '(Android) Cafe Shop', image: cafe, github: 'https://github.com/aryanjairath/Cafe-App' },
        { title: 'Definitional Interpreter', image: interpret, github: 'https://github.com/aryanjairath/Cafe-App' },
        { title: '(Android) Gains from Home', image: lifting, github: 'https://github.com/aryanjairath/workoutapp.git' },
        { title: 'College Tuition Manager (GUI)', image: tuition, github: 'https://github.com/aryanjairath/TuitionManager' },
        { title: '2/3 Dimensional Maze Project', image: maze1, github: 'https://github.com/aryanjairath/JavaFXProjects' },
        { title: 'Music Box (Music Player)', image: MusicBox, github: 'https://github.com/aryanjairath/JavaFXProjects' },
        { title: 'GUI/Paint Simulation', image: Paint, github: 'https://github.com/aryanjairath/JavaFXProjects' },
        { title: 'This React Portfolio Website', image: reactIc, github: 'https://github.com/aryanjairath/react-portfolio-website-1' },
        { title: 'Android Calculator App', image: Calc, github: 'https://github.com/aryanjairath/CalculatorApp' },
        { title: 'Android DOB Calculator', image: DOB, github: 'https://github.com/aryanjairath/DOBCalc.git' }
      ];
      const displayedItems = showAll ? items : items.slice(0, 6); // Display first 4 items or all
      
      const calculateDelay = (index) => {
        const baseDelay = 0.2; // Base delay in seconds
        return baseDelay * index; // Increase delay for each subsequent item
      }
    
      return (
        <section id='portfolio'>
          <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
              <h5>My Recent Work</h5>
              <h2>Portfolio</h2>
          </ScrollAnimation>
          <div className="container portfolio_container">
          {displayedItems.map((item, index) => (
            <ScrollAnimation 
                key={index}
                animateIn="animate__animated animate__fadeIn"
                animateOnce={true}
                delay={calculateDelay(index) * 1000} // Delay in milliseconds
            >
            <article className='portfolio_item'>
                <h3>{item.title}</h3>
                <div className = 'portfolio_item-image'>
                    <img src = {item.image} alt = ''></img>
                </div>
                <div className = "portfolio_item-cta">
                    <a href={item.github} className ='btn' target = '_blank'>Github</a>
                </div>
            </article>
            </ScrollAnimation>
           ))}
          </div>
          <button className="btn MAIN" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Fewer' : 'Show All'}
          </button>
        </section>
      );
}
export default Portfolio