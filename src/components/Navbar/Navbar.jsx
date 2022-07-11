import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const[toggleMenu,  setToggleMenu] = useState(false);
  
  return (
  <nav className='navbar'>
    <div className='navbar-logo'>
      <img src={images.logo} alt='logo' />
    </div>
    <ul className='nav-links'>
      <li className='section_link'><a href="#home">Home</a></li>
      <li className='section_link'><a href="#about">Sobre</a></li>
      <li className='section_link'><a href="#Menu">Menu</a></li>
      <li className='section_link'><a href="#VALE">Vale-Presente</a></li>
      <li className='section_link'><a href="#Contact">Contato</a></li>
    </ul>
    <div className='nav-itens'>
      <a href='#loguin' className='nav-loguin'>Log In / Register</a>
      <a href='/' className='nav_cart'><FaShoppingCart /></a>
    </div>
    <div className='navbar-screen'>
    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu  && (
      <div className='screen-overlay flex__center slide-button'>
      <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
        <ul className='screen-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#VALE">Vale-Presente</a></li>
          <li><a href="#Contact">Contato</a></li>
        </ul>
      </div>
      )}
    </div>
    
  </nav>
  )
};

export default Navbar;
