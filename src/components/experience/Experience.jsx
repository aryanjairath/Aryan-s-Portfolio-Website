import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {SiAssemblyscript, SiJava, SiJquery, SiKotlin, SiMysql, SiXaml} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {ImHtmlFive2} from 'react-icons/im';
import {DiCss3, DiJava, DiJavascript, DiJavascript1, DiJqueryLogo, DiMysql, DiPython, DiSqllite} from 'react-icons/di'
import {Paint} from '../../assets/PaintProgram.png'
import {IoLogoJavascript} from 'react-icons/io'

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { GrMysql } from 'react-icons/gr';
const Experience = () => {
  return (
    <section id ='experience'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5> My Skils</h5>
            <h2> Coding Languages</h2>
        </ScrollAnimation>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <h3></h3>

                <div className="experient_content">
                    <article className='experience_details'>
                        <FaReact className='icon'/>
                        <div>
                            <h4>React</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <ImHtmlFive2 className='icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiJavascript1 className='icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiCss3 className='icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiJquery className='icon'/>
                        <div>
                            <h4>jQuery</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
            <h3>Backend Development</h3>
            <h3></h3>

                <div className="experient_content">
                    <article className='experience_details'>
                        <DiJava className='icon'/>
                        <div>
                            <h4>Java</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiPython className='icon'/>
                        <div>
                            <h4>Python</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiXaml className='icon'/>
                        <div>
                        <h4>XML</h4>
                        <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiAssemblyscript className='icon'/>
                        <div>
                        <h4>Assembly</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <GrMysql className='icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiKotlin className='icon'/>
                        <div>
                        <h4>Kotlin</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Experience