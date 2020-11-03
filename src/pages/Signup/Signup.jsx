import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Wrapper,
  Container,
  SignUpWrap,
  SignUpForm,
  FooterForm,
  ErrorMessage,
} from './styles';
import pokedex from '../../assets/images/Pokedex_icon.svg';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, verifyUser } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await verifyUser();
      history.push('/home');
    } catch {
      setError('Failed to create an account!');
    }

    setLoading(false);
  }

  return (
    <Wrapper>
      <Container>
        <SignUpWrap>
          <SignUpForm onSubmit={handleSubmit}>
            <span className='login-form-title '> Welcome</span>
            <span className='login-form-title'>
              <img src={pokedex} alt='Pokeball icon' />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </span>
            <div className='wrap-input'>
              <input type='email' placeholder='Email' ref={emailRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input
                type='password'
                placeholder='Password'
                ref={passwordRef}
                minLength='6'
                required
              />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input
                type='password'
                placeholder='Confirm Password'
                ref={passwordConfirmRef}
                minLength='6'
                required
              />
              <span className='focus-input'></span>
            </div>
            <div className='container-form-btn'>
              <div className='wrap-form-btn'>
                <button disabled={isLoading} type='submit' className='signup'>
                  Sign Up
                </button>
              </div>
            </div>
            <FooterForm>
              <span className='txt'>Already have an account?</span>

              <Link className='txt' to='/login'>
                Login
              </Link>
            </FooterForm>
          </SignUpForm>
        </SignUpWrap>
      </Container>
    </Wrapper>
  );
};

export default Signup;
