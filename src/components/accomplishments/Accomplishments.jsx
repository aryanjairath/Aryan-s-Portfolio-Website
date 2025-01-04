import React, { useState } from 'react'
import fannie from  '../../assets/fannie.jpg'
import biomed from  '../../assets/biomed.png'
import c1 from  '../../assets/capone.png'
import Popup from 'reactjs-popup'
import genesis from  '../../assets/genesis.jpg'
import {BsBank, BsHouseDoor} from 'react-icons/bs'
import {FaRegKeyboard} from 'react-icons/fa'
import {BiMoney, BiTestTube} from 'react-icons/bi'
import ScrollAnimation from 'react-animate-on-scroll';
import {BsArrowRight} from 'react-icons/bs'
import 'animate.css';
const Accomplishments = () => {
   const[show, setShow] = useState(true)
   const handleClick = () =>{
      setShow(!show)
   }
   const items = [
    { title: 'Capital One Hackathon', explanation: 'Received second place in the internwide hackathon, created a project using MERN stack' },
    { title: 'Fannie Mae Distinguished Intern', explanation: 'Received speical recognition for being proactive among the intern class' },

  ];
    return (
    <section id = 'new'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5>Accomplished</h5>
            <h2>Achievements</h2>
            {show &&
            <div>
                        {items.map((item, index) => (
                          <article className='portfolio_item' style = {{width: '80%', margin:'0 auto', marginBottom: '1rem'}}>
                          <h3>{item.title}</h3>
                          <p>{item.explanation}</p>
                          
                      </article>
                        ))}

            </div>}
            
            <button className="btn MAIN" onClick={() => handleClick()}>View Accomplishments</button>

        </ScrollAnimation>
    </section>
  )
}

export default Accomplishments