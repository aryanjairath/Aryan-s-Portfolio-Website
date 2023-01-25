import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'


const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Work />
    <Nav />
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )

}

export default App