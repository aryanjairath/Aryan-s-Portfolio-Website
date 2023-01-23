import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {SiCrowdsource} from 'react-icons/si'
import {Animated} from "react-animated-css";

const About = () => {
  return (
    <section id = 'about'>
        <h5> Get To Know Me</h5>
        <h2>About Me</h2>


        <div className="container about_container">
            <div className = 'about_me'>
                <div className='about_me-image'>
                    <img src = {ME} alt ="About Image"/>
                </div>
            </div>
            <div className = "about_content">
                <div className = "about_cards">
                    <article className ='about_card'>
                        <FaGraduationCap className = 'about_icon' />
                        <h5>Education</h5>
                        <small>BS Computer Science</small>
                        <small>@ Rutgers University</small>
                    </article>

                    <article className ='about_card'>
                        <SiCrowdsource className = 'about_icon' />
                        <h5>Leadership</h5>
                        <small>Executive mangagement positions</small>
                    </article>

                    <article className ='about_card'>
                        <HiOutlineDesktopComputer className = 'about_icon' />
                        <h5>Projects</h5>
                        <small>10+ Personal Projects</small>
                    </article>
                </div>
                <p>I am currenty a second year student at Rutgers
                    University with both Front-End and Back-End experiene in programming. 
                    I have a 3.92 GPA and have surrounded myself in an environment to further 
                    my computer science arsenal in any way possible. I currently am involved in the
                    Rutgers Security Club. I am currently a software engineer intern at Fannie Mae for the enterprise architect team. 
                    In my free time, I enjoy doing algorithmic style coding problems, making mobile 
                    applications particularly on the Android side. I also have a multitude of hobbies: a big Brooklyn Nets and Roger 
                    Federer fan and watch sports almost every day and also just hanging out with friends and family whenver I can. </p>
            </div>
            <a href = "#contact" className = "btn btn-primary">Let's Chat!</a>
        </div>
    </section>
  )
}

export default About