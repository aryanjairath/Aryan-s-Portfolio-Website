import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import ScrollAnimation from 'react-animate-on-scroll';
import './index.css'
import ThemeContextProvider from './contexts/ThemeContext'

const App = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <div className={isLight ? 'dark-mode' : 'light-mode'}>
      <Header/>
      <ScrollAnimation animateIn=" animate__animated animate__fadeIn" duration={3.7} animateOnce={true}><About /></ScrollAnimation>
      <ScrollAnimation animateIn=" animate__animated animate__fadeIn" duration={3.7} animateOnce={true}><Work /></ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={3.7} animateOnce={true}><Experience /></ScrollAnimation>
      <Nav/>
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={3.7} animateOnce={true}><Portfolio /></ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={3.7} animateOnce={true}><Portfolio /></ScrollAnimation>
      <ScrollAnimation animateIn="animate__animated animate__bounce" duration={2.2} animateOnce={true}><Contact /></ScrollAnimation>    
      <Footer/>
    </div>
    </>
  )

}

export default App