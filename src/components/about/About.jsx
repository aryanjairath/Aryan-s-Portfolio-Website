import React, { useContext } from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { ThemeContext } from '../../contexts/ThemeContext'
import { about, about_achievements, about_leader, about_project } from './about-data'
import AboutDetailGroup from './AboutDetails'
import Popout from './Popout';

const About = () => {
  const {isLight, DarkMode, LightMode} = useContext(ThemeContext);
  const theme = isLight ? LightMode: DarkMode;
  return (
    <section id = 'about'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5 style = {{color:theme.text}}> Get To Know Me</h5>
            <h2>About Me</h2>
        </ScrollAnimation>
        <div className="container about_container">
            <div className = 'about_me'>
                <div className='about_me-image'>
                    <img src = {ME} alt ="About Image"/>
                </div>
            </div>
            
            <div className = "about_content">
                <div className = "about_cards">
                    {about.map((item) => (
                    <article className='about_card'>
                        <item.ticker className = 'about_icon' />
                        <h5>{item.accomplishment}</h5>
                        <small>{item.descrip}</small>
                    </article>
                    ))}

                    <AboutDetailGroup data={about_achievements} />
                    <AboutDetailGroup data={about_leader} />
                    <AboutDetailGroup data={about_project} />

                </div>
            </div>
            <Popout blockOne = {'As a fourth-year student at Rutgers University, I am immersed in expanding my expertise in both front-end and back-end programming. Currently holding a 3.96 GPA, I am committed to enhancing my computer science skills in every possible way. My active involvement in the Rutgers Security Club further enriches my learning experience. Professionally, I have gained valuable job experience working at Capital One and Fannie Mae, which has contributed significantly to my practical understanding of CI/CD, product lifecycle, and architecture as a whole.'} blockTwo = {'In my leisure time, I indulge in algorithmic coding challenges and develop mobile applications, with a particular focus on Android platforms. Outside of academics and work, I am an avid sports enthusiast, closely following the Brooklyn Nets and the Los Angeles Lakers. Watching sports is a daily pleasure for me, along with spending quality time with friends and family whenever possible. My diverse interests and experiences contribute to a well-rounded and dynamic approach to both my professional and personal life.'} />
        </div>
    </section>
  )
}

export default About