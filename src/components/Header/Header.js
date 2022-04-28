import React from 'react';
import logo from '../../logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto my-11 flex justify-between items-center'>
        <div>
          <img className='w-52' src={logo} alt='Traveler Network Logo' />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
