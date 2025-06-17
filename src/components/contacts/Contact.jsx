import React from 'react'
import'./contact.css';

import {useRef} from 'react';
import emailjs from 'emailjs-com';
import ScrollAnimation from 'react-animate-on-scroll';
import { contact_option } from './ContactInfo';
export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_xbnn4xf","template_ylbml5i",form.current,"ccUirxmdggGR1Y9MN");
    };
    
  return (
    <section id = 'contact'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h2>Contact Me</h2>
        </ScrollAnimation>
        <div className = "container contact_container">
            <div className = 'contact_options'>
                {contact_option.map((item) => (
                <article className='contact_option'>
                    <item.ticker className='contact-option-icon' />
                    <h4>{item.media}</h4>
                    <h5>{item.via}</h5>
                    <div>
                        <a href = {item.infoOne}>{item.infoOneTitle}</a>
                        <a href = {item.infoTwo}>{item.infoTwoTitle}</a>
                    </div>
                </ article>
            ))}
            </div>
            <form ref = {form} onSubmit={sendEmail}>
                <input type='text' name = 'name' placeholder='Your Name' required/>
                <input type = 'email' name = 'email' placeholder = 'Your Email' required/>
                <textarea name = 'message' rows = '7' placeholder= 'Your Message' required/>
                <button  className='btn sub'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact