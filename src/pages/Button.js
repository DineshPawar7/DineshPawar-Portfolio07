import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = () => {
  return (
    <div className='testimonials-btn'>
      <Link to='/testimonials'>See Testimonials</Link>
    </div>
  );
};

export default Button;
