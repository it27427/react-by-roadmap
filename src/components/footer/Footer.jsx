import React from 'react';
import Copyright from '../copyright/Copyright';

const Footer = () => {
  return (
    <footer>
      <h1>Footer</h1>

      <div className='copyright'>
        <p className='copyright-text'>
          &copy; <Copyright /> All rights reserved - Istiak Tushar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
