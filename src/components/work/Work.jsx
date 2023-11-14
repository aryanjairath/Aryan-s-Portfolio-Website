import React from 'react'
import './work.css'
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
const Work = () => {
    const createParagraphs = (textArray) => {
        return textArray.map((text, index) => (
            <p key={index}>{text}</p>
        ));
    };

    // Array of strings for the popup content
    const biomedPop = ["Created and presented engaging, informative lectures about different topics in biology and medicine on a weekly basis throughout the school year. Took into account the interest of club members to develop engaging activities for meetings. Personally invited over 10 guest speakers (including, but not limited to doctors, nurses, and researchers) to provide club members with real-life experiences through a school-wide event, BioMed Career Convention."];
    const genesisPop = ["• Taught lessons plans with 50+ students pivotal Java concepts such as polymorphism, inheritance, and encapsulation; also assigned a JavaFX game development project",
    "• Reinforced concepts with limited computer access through exercises such as determine the output and big O",
    "analysis depending on experience; over 75% of the cohort passed Data Structures certification exam"];
    const fanniePop =["• Used DBeaver to test PostgreSQL query performance through AWS Redshift saving 10 hours per execution • Worked with Spring Boot and Angular in Social Score Calculator webapp; improved error handling by 20% • AWS environment, implementing SageMaker for advanced data modeling; improved single-family prediction accuracy by 40% for stakeholders, resulting in optimized resource allocation and increased revenue potential. • Created decision trees to compare Dask, Pandas, Spark, and Polars based on cost and performance for utilization • Created a PowerAutomate flow in Microsoft PowerApps to conduct the transfer of files from Sharepoint to S3. • Used tools such as JIRA and performed unit testing with JUnit to validate applied logic and edge cases."]
    const c1Pop = ["More information coming soon!"]
    return (
    <section id = 'work'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5>Work & Leadership</h5>
            <h2>Internships</h2>
        </ScrollAnimation>
        <div className="container work">
                <article className="portfolio_item">
                    <article className='experience_details'>
                        <BsBank className = 'work-option-icon'/>
                        <BsArrowRight/>
                        <div>
                            <h4>Capital One: TDP Software Engineer</h4>
                            <div className = 'work-image'>
                                <img src = {c1} alt = 'fannie'></img>
                                
                            </div>
                        </div>
                    </article>
                    <Popup trigger={<button className='btn btn-primary'>Learn More</button>} modal nested>
                {close => (
                    <div className='modal'>
                        <div className="pop_up_window animate__animated animate__zoomIn">
                            {createParagraphs(c1Pop)}
                        </div>
                        <button className='btn btn-primary' onClick={() => close()}>
                            Close
                        </button>
                    </div>
                )}
            </Popup>
                </article>
                <article className="portfolio_item">
                    <article className='experience_details'>
                        <BsHouseDoor className = 'work-option-icon'/>
                        <BsArrowRight/>
                        <div>
                            <h4>Fannie Mae: Software Engineer</h4>
                            <div className = 'work-image'>
                                <img src = {fannie} alt = 'fannie'></img>
                            </div>
                        </div>
                    </article>
                    <Popup trigger={<button className='btn btn-primary'>Learn More</button>} modal nested>
                {close => (
                    <div className='modal'>
                        <div className="pop_up_window animate__animated animate__zoomIn">
                            {createParagraphs(fanniePop)}
                        </div>
                        <button className='btn btn-primary' onClick={() => close()}>
                            Close
                        </button>
                    </div>
                )}
            </Popup>
                </article>
                <article className="portfolio_item">
                    <article className='experience_details'>
                        <FaRegKeyboard className = 'work-option-icon'/>
                        <BsArrowRight/>
                        <div>
                            <h4>Genesis Code: Event Manager</h4>
                            <div className = 'work-image'>
                                <img src = {genesis} alt = 'fannie'></img>
                            </div>
                        </div>
                    </article>
                    <Popup trigger={<button className='btn btn-primary'>Learn More</button>} modal nested>
                {close => (
                    <div className='modal'>
                        <div className="pop_up_window animate__animated animate__zoomIn">
                            {createParagraphs(genesisPop)}
                        </div>
                        <button className='btn btn-primary' onClick={() => close()}>
                            Close
                        </button>
                    </div>
                )}
            </Popup>
                </article>
                <article className="portfolio_item">
                    <article className='experience_details'>
                        
                        <BiTestTube className = 'work-option-icon'/>
                        <BsArrowRight/>
                        
                        <div>
                            <h4>Biomedical Futures: Executive</h4>
                            <div className = 'work-image'>
                                <img src = {biomed} alt = 'fannie'></img>
                                
                            </div>
                            
                        </div>
                    </article>
                    <Popup trigger={<button className='btn btn-primary'>Learn More</button>} modal nested>
                {close => (
                    <div className='modal'>
                        <div className="pop_up_window animate__animated animate__zoomIn">
                            {createParagraphs(biomedPop)}
                        </div>
                        <button className='btn btn-primary' onClick={() => close()}>
                            Close
                        </button>
                    </div>
                )}
            </Popup>

                </article>
        </div>
    </section>
  )
}

export default Work