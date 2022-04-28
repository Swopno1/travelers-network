import React from 'react';
import logo from '../../logo.png';
import Button from '../design/Buttons/Button';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto my-11 flex justify-between items-center'>
        <div>
          <img className='w-52' src={logo} alt='Traveler Network Logo' />
        </div>
        <div className='flex items-center'>
          <Nav />
          <Button className='bg-blue1 mr-3' text='Register' />
          <Button className='bg-dark1' text='Admin' />
        </div>
      </div>
    </header>
  );
};

export default Header;
