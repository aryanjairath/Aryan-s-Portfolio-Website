import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className = 'header_socials'>
        <a href = 'https://www.linkedin.com/in/aryan-jairath-1436a320a/' target = "_blank"><BsLinkedin /></a>
        <a href = 'https://github.com/aryanjairath' target = "_blank"><AiFillGithub/></a>

    </div>
  )
}

export default HeaderSocials