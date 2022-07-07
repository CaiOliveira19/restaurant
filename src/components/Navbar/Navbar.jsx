import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar-logo'>
      <img src={images.gericht} alt='logo' />
    </div>
    <ul className='nav-links'>
      <li className='section_link'><a href="#home">HOME</a></li>
      <li className='section_link'><a href="#about">SOBRE</a></li>
      <li className='section_link'><a href="#Menu">MENU</a></li>
      <li className='section_link'><a href="#VALE">VALE</a></li>
      <li className='section_link'><a href="#Contact">CONTATO</a></li>
    </ul>
    <div className='nav-itens'>
      <a href='#loguin' className='nav-loguin'>Log In / <br/> Register</a>
      <a href='/' className='nav_cart'><FaShoppingCart /></a>
    </div>
    
  </nav>
);

export default Navbar;
