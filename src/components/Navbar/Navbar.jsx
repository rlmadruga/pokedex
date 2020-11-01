import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

const Navbar = () => {
  return (
    <NavBar>
      <Link to='/home'>Pokédex</Link>
      <div className='div-internal'>
        <Link as={Link} to='/login'>
          LOGIN
        </Link>
        <p>|</p>
        <Link as={Link} to='/signup'>
          SIGN UP
        </Link>
      </div>
    </NavBar>
  );
};

export default Navbar;
