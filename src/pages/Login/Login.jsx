import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Container, LoginWrap, LoginForm, FooterForm } from './styles.js';
import pokeball from '../../assets/images/Pokeball_icon.svg';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <LoginWrap>
          <LoginForm>
            <span className='login-form-title '> Login</span>
            <span className='login-form-title'>
              <img src={pokeball} alt='Pokeball icon' />
            </span>
            <div className='wrap-input'>
              <input type='email' placeholder='Email' />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input type='password' placeholder='Password' />
              <span className='focus-input'></span>
            </div>
            <div className='container-form-btn'>
              <div className='wrap-form-btn'>
                <button className='login'>Login</button>
              </div>
            </div>
            <FooterForm>
              <span className='txt'>Don't have an account?</span>

              <Link className='txt' to='/'>
                Sign Up
              </Link>
            </FooterForm>
          </LoginForm>
        </LoginWrap>
      </Container>
    </Wrapper>
  );
};

export default Login;
