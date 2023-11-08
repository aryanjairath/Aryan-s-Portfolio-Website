// CustomPopup.jsx
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './CustomPopup.css';

const CustomPopup = ({ buttonText, text }) => (
  <Popup
    trigger={<button className='btn btn-primary'>{buttonText}</button>}
    modal
    nested
  >
    {close => (
                    <div className='modal'>

                        <div className="pop_up_window animate__animated animate__zoomIn">
                            <p>I am currenty a second year student at Rutgers</p>
                            <p>University with both Front-End and Back-End experience in programming.</p>
                            <p>I have a 3.92 GPA and have surrounded myself in an environment to further</p> 
                            <p>my computer science arsenal in any way possible. I currently am involved in the</p>                                
                            <p>Rutgers Security Club.</p>
                            <p>In my free time, I enjoy doing algorithmic style coding problems, making mobile</p>
                            <p>applications particularly on the Android side. I also have a multitude of hobbies: a big Brooklyn Nets and Roger </p>
                            <p>Federer fan and watch sports almost every day and also just hanging out with friends and family whenver I can. </p>                            
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
);

export default CustomPopup;
