import React from 'react';
import { Link } from 'react-router-dom';
import'./Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
      <li className='nav-name'>Dona Elizabeth Saji</li>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/education'><li>Education</li></Link>
        <Link to='/experience'><li>Experience</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>

    </nav>
  );
}

export default Nav;
