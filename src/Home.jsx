import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nav from './Nav';
import img from'./img.jpg'
const Home = () => {
  const add = 'Hello.... I am';
  const mail = ' Dona Elizabeth Saji';
  const num = 'Mern stack developer';

  return (
    <div className='home'>
      <img  className='home-img'src={img} />
      <div className='head'>
        <h3 className='home-heading3'>{add}</h3>
        <h1 className='home-heading1'>{mail}</h1>
        <h2 className='home-heading2'>{num}</h2>
        <Link to ="/dona 1.pdf">
          <button className="downloadcv-button">Download CV</button>
          </Link>
        <Link to="/contact">
          <button className="contact-button">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
