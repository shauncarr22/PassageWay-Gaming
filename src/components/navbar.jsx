import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../LogoNew.png'


const NavBar = () => {
    return(
      <nav>
          <ul className="menu">
              <li className='logo'><img className="logo_img" src={Logo} alt=""></img></li>
              <li className="item"><a><Link to='/'>Home</Link></a></li>
              <li className="item"><a><Link to='/profile'>Profile</Link></a></li>
              <li className='item'><a><Link to='/about'>About</Link></a></li>
              <li/>
              <li className="item button"><a><Link to='/login'>Login</Link></a></li>
              <li className='item button secondary'><a><Link to='/signup'>Sign Up</Link></a></li>
              <li className="toggle"><span className="bars"></span></li>
          </ul>
      </nav>
    );
}

export default NavBar

