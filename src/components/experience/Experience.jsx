import React from 'react'
import './experience.css'
import {SiC,SiCplusplus,SiAndroidstudio, SiAssemblyscript, SiJava, SiJquery, SiKotlin, SiLinux, SiMysql, SiSpringboot, SiVisualstudiocode, SiXaml, SiSnowflake, SiJetbrains   } from 'react-icons/si';

import {FaAngular, FaAws, FaJava, FaLinux, FaReact} from 'react-icons/fa';
import {ImHtmlFive2, ImNpm} from 'react-icons/im';
import {DiAws, DiCss3, DiEclipse, DiGit, DiJava, DiJavascript, DiJavascript1, DiPython, DiSqllite, DiVisualstudio} from 'react-icons/di'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { GrMysql } from 'react-icons/gr';
import { SiAwslambda } from "react-icons/si";
import {GiBeaver} from 'react-icons/gi'
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
                <div className="experient_content">
                    <article className='experience_details'>
                        <FaJava className='icon'/>
                        <div>
                            <h4>JavaFX</h4>
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
                <div className="experient_content">
                    <article className='experience_details'>
                        <FaAngular className='icon'/>
                        <div>
                        <h4>Angular</h4>
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
                        <SiC className='icon'/>
                        <div>
                        <h4>C</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiCplusplus className='icon'/>
                        <div>
                        <h4>C++</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiSpringboot className='icon'/>
                        <div>
                        <h4>Spring Boot</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
           
                <h3>IDE/Editors/Dev. Tools</h3>
                <h3></h3>
        
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiVisualstudiocode className='icon'/>
                        <div>
                            <h4>Visual Studio Code</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiEclipse className='icon'/>
                        <div>
                            <h4>Eclipse</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiAndroidstudio className='icon'/>
                        <div>
                        <h4>Android Studio</h4>
                        <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiSnowflake className='icon'/>
                        <div>
                            <h4>Snowflake</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiAwslambda className='icon'/>
                        <div>
                            <h4>AWS Lambda</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiGit className='icon'/>
                        <div>
                        <h4>Git/Bash</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiLinux className='icon'/>
                        <div>
                        <h4>Linux</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiJetbrains className='icon'/>
                        <div>
                        <h4>JetBrains</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <GiBeaver className='icon'/>
                        <div>
                        <h4>DBeaver</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <FaAws className='icon'/>
                        <div>
                        <h4>AWS Console</h4>
                        <small className = 'text'>Beginner</small>
                        </div>
                    </article>
                </div>
            </div>
    </section>
  )
}

export default Experience