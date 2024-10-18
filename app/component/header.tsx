import React from 'react';
import Navbar from './navbar';

const Header = () => {
  return (
    <div>
      <ul>
        <Navbar href='/' name='Home' />
        <Navbar href='/country' name='Country' />
      </ul>
    </div>
  );
};

export default Header;