import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {SiAssemblyscript, SiJava, SiKotlin, SiMysql, SiXaml} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {ImHtmlFive2} from 'react-icons/im';
import {DiCss3, DiJava, DiJavascript, DiJavascript1, DiMysql, DiPython, DiSqllite} from 'react-icons/di'
import {Paint} from '../../assets/PaintProgram.png'
import {IoLogoJavascript} from 'react-icons/io'
const Experience = () => {
  return (
    <section id ='experience'>
        <h5> My Skils</h5>
        <h2> My Experience</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experient_content">
                    <article className='experience_details'>
                        <FaReact/>
                        <div>
                            <h4>React</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <ImHtmlFive2/>
                        <div>
                            <h4>HTML</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiJavascript1/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiCss3/>
                        <div>
                            <h4>CSS</h4>
                            <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
            <h3>Backend Development</h3>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiJava/>
                        <div>
                            <h4>Java</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiPython/>
                        <div>
                            <h4>Python</h4>
                            <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <DiMysql/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiXaml/>
                        <div>
                        <h4>XML</h4>
                        <small className = 'text'>Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiAssemblyscript/>
                        <div>
                        <h4>Assembly</h4>
                        <small className = 'text'>Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <SiKotlin/>
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