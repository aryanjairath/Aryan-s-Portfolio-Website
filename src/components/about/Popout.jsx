import React from "react";
import './about.css'
import Popup from 'reactjs-popup'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from "react";

const Popout = ({blockOne, blockTwo}) => {
    const {isLight, DarkMode, LightMode} = useContext(ThemeContext);
    const theme = isLight ? LightMode: DarkMode;
    return (
           <Popup trigger=
                    {<button className='btn btn-primary'> Learn More About Me </button>}
                    modal nested>
                    {close => (
                        <div className='modal'>
    
                            <div className="pop_up_window animate__animated animate__zoomIn">
                                <p style = {{color: theme.text}}>
                                    {blockOne}
                                    <br /> <br />
                                    {blockTwo}
                                </p>                          
                            </div>
                            <div>
                                <button className = 'btn btn-primary'onClick=
                                    {() => close()}>
                                        Close                                
                                    </button>
                        </div>
                        </div>
                        )
                    }
            </Popup> 
    )
}

export default Popout;