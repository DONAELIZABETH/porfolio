import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h4 className="exp-head4">Explore my</h4>
      <h1 className="exp-head1">Experience</h1>

      {/* Full-Stack Development box */}
      <div className="exp-fsd-box">
        <h2>Full-Stack Development</h2>
        <h3>MERN Stack</h3>
      </div>

      {/* Row for Front-End and Back-End boxes */}
      <div className="exp-row">
        {/* Front-End Development box */}
        <div className="exp-box">
          <h2>Front-End Development</h2>
          <h3>HTML:
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h3>
          <h3>CSS:
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h3>
        </div>

        {/* Back-End Development box */}
        <div className="exp-box">
          <h2>Back-End Development</h2>
          <h3>C Programming:
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h3>
          <h3>SQL:
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
