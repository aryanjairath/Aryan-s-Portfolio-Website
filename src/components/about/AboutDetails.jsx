import React from "react";
import './about.css';

const AboutDetailGroup = ({ data }) => (
    <article className='about_details'>
      {data.map((item, index) => (
        <div key={index}>
          <item.ticker className='bullet' />
          <small>{item.achievement}</small>
        </div>
      ))}
    </article>
  );
  
export default AboutDetailGroup;