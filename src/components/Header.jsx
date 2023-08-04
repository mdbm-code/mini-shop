import React from 'react';

const Header = () => {
  return (
    <nav className='purple darken-4'>
      <div className='nav-wrapper'>
        <a href='!#' className='brand-logo'>
          Mini shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/mdbm-code/mini-shop'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
