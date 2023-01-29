import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css';


const App = () => {
  return (
    <>
    <Header/>
    <ScrollAnimation animateIn=" animate__animated animate__fadeIn" duration={2} animateOnce={true}><About /></ScrollAnimation>
    <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={2} animateOnce={true}><Experience /></ScrollAnimation>
    <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={2} animateOnce={true}><Portfolio /></ScrollAnimation>
    <ScrollAnimation animateIn="animate__animated animate__bounce" duration={1.8} animateOnce={true}><Contact /></ScrollAnimation>    
    <Footer/>
    </>
  )

}

export default App