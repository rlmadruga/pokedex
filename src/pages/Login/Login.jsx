import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Wrapper,
  Container,
  LoginWrap,
  LoginForm,
  FooterForm,
  ErrorMessage,
} from './styles.js';
import pokeball from '../../assets/images/Pokeball_icon.svg';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/home');
    } catch {
      setError('Failed to sign in!');
    }

    setLoading(false);
  }
  return (
    <Wrapper>
      <Container>
        <LoginWrap>
          <LoginForm onSubmit={handleSubmit}>
            <span className='login-form-title '> Login</span>
            <span className='login-form-title'>
              <img src={pokeball} alt='Pokeball icon' />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </span>
            <div className='wrap-input'>
              <input type='email' placeholder='Email' ref={emailRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input type='password' placeholder='Password' ref={passwordRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='container-form-btn'>
              <div className='wrap-form-btn'>
                <button disabled={isLoading} type='submit' className='login'>
                  Login
                </button>
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
