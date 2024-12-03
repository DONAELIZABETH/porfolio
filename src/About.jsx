import React from 'react';
import './About.css';
import img from './img2.jpg';

const About = () => {
  return (
<div>
<div>
</div>
    <div className="about">
      <h4 className='about-heading4'>Get to know <br /> more</h4>
      <h1 className='about-heading1'>About Me</h1>
      
      <div className="about-content">
        <img className='about-img' src={img} alt="Profile" />
        <p className='about-paragraph'>
          To secure a challenging position as a Computer Science Engineering fresher in a dynamic organization that allows me to utilize my technical skills, contribute to innovative projects, and further enhance my knowledge and expertise in the field. I am seeking an environment that fosters professional growth and offers opportunities for continuous learning, enabling me to make a significant impact in the ever-evolving technology landscape.
        </p>
      </div>
    </div>
    <div>
    </div>
</div>
    
  );
};

export default About;
