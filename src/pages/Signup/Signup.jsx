import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Container,
  SignUpWrap,
  SignUpForm,
  FooterForm,
  ErrorMessage,
} from './styles';
import bag from '../../assets/images/Bag_icon.svg';
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
              <img src={bag} alt='Pokeball icon' />
            </span>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className='wrap-input'>
              <input type='email' placeholder='Email' ref={emailRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input type='password' placeholder='Password' ref={passwordRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-input'>
              <input
                type='password'
                placeholder='Confirm Password'
                ref={passwordConfirmRef}
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
