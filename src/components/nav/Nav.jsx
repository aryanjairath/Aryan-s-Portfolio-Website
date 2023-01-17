import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {BsBook} from 'react-icons/bs';
import {AiOutlineContacts} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
        <a href="#" onClick = {() => setActiveNav('#')} className={activeNav==='#'?'active': ''}><BiHome/></a>
        <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav==='#about'?'active': ''}><CgProfile/></a>
        <a href="#experience" onClick = {() => setActiveNav('#experience')} className={activeNav==='#experience'?'active': ''}><BsBook/></a>
        <a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav==='#contact'?'active': ''}><AiOutlineContacts/></a>

   </nav>
  )
}

export default Nav