import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Wrapper, Main, Title, Button } from './styles';
import FourOFour from '../../assets/images/404.gif';

const NotFound = () => {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <Navbar currentUser={currentUser} logout={logout} />
      <Wrapper>
        <Main>
          <img src={FourOFour} alt='Not Found' />
          <Title>Uh-oh! You seen to be lost!</Title>
          <Link to='/home'>
            <Button>Go Back</Button>
          </Link>
        </Main>
      </Wrapper>
    </>
  );
};

export default NotFound;
