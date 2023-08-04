import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer purple darken-4'>
      <div className='footer-copyright'>
        <div className='container'>© {new Date().getFullYear()} mdbm</div>
      </div>
    </footer>
  );
};

export default Footer;
