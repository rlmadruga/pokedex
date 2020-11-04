import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NavBar, ErrorMessage } from './styles';

const Navbar = ({ currentUser, logout }) => {
  const [errorLog, setErrorLog] = useState('');
  const history = useHistory();

  async function handleLogout() {
    setErrorLog('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setErrorLog('Failed to logout!');
    }
  }

  return (
    <NavBar>
      {errorLog && <ErrorMessage>{errorLog}</ErrorMessage>}
      <Link to='/home'>Pokédex</Link>
      <div className='div-internal'>
        {currentUser ? (
          <>
            {currentUser.email}
            <button as={Link} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link as={Link} to='/login'>
              LOGIN
            </Link>
            <p>|</p>
            <Link as={Link} to='/'>
              SIGN UP
            </Link>
          </>
        )}
      </div>
    </NavBar>
  );
};

export default Navbar;
