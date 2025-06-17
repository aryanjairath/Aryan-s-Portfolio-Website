import { FaGraduationCap } from "react-icons/fa"
import { SiCrowdsource } from "react-icons/si"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { BsArrowRightCircleFill } from "react-icons/bs"
const about = [
    {ticker: FaGraduationCap, accomplishment: 'Education', descrip: 'BS Computer Science & Data Science<br />@ Rutgers University'},
    {ticker: SiCrowdsource, accomplishment: 'Leadership', descrip: 'Executive mangagement positions'},
    {ticker: HiOutlineDesktopComputer, accomplishment: 'Projects', descrip: '5+ Personal Projects'},

]

const about_achievements = [
    {ticker: BsArrowRightCircleFill, achievement: 'GPA: 3.96'},
    {ticker: BsArrowRightCircleFill, achievement: 'Innovation Fellowship'},
    {ticker: BsArrowRightCircleFill, achievement: 'RU Security Club'}

]

export default {about, about_achievements}