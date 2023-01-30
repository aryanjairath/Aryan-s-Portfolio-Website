import React from 'react'
import './work.css'
import fannie from  '../../assets/fannie.jpg'
import biomed from  '../../assets/biomed.png'
import genesis from  '../../assets/genesis.jpg'
import {BsHouseDoor} from 'react-icons/bs'
import {FaRegKeyboard} from 'react-icons/fa'
import {BiTestTube} from 'react-icons/bi'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
const Work = () => {
  return (
    <section id = 'work'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5>Work/Leadership</h5>
            <h2>Internships</h2>
        </ScrollAnimation>
        <div className="container work">
            <article className='portfolio_item'>
                <h3>My Positions</h3>
                <div className="experient_content">
                    <article className='experience_details'>
                        <BsHouseDoor/>
                        <div>
                            <h4>Fannie Mae-Software Engineer</h4>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <FaRegKeyboard/>
                        <div>
                            <h4>Genesis Code-Event Handler</h4>
                        </div>
                    </article>
                </div>
                <div className="experient_content">
                    <article className='experience_details'>
                        <BiTestTube/>
                        <div>
                            <h4>Biomedical Futures-Executive Member</h4>
                        </div>
                    </article>
                </div>
            </article>

            <article className='portfolio_item'>                
                <div className = 'work-image'>
                    <img src = {fannie} alt = 'fannie'></img>
                </div>
            </article>
            <article className='portfolio_item'>                
                <div className = 'work-image'>
                    <img src = {genesis} alt = 'fannie'></img>

                </div>
            </article>
            <article className='portfolio_item'>                
                <div className = 'work-image'>
                    <img src = {biomed} alt = 'fannie'></img>

                </div>
            </article>
        </div>
    </section>
  )
}

export default Work