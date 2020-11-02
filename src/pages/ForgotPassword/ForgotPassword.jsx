import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Container,
  LoginWrap,
  LoginForm,
  FooterForm,
  ErrorMessage,
} from './styles';
import eggOh from '../../assets/images/hatching_egg_icon.svg';
import { useAuth } from '../../contexts/AuthContext';

const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions!');
    } catch {
      setError('Failed to reset Password!');
    }

    setLoading(false);
  }
  return (
    <Wrapper>
      <Container>
        <LoginWrap>
          <LoginForm onSubmit={handleSubmit}>
            <span className='login-form-title '> Password Reset</span>
            <span className='login-form-title'>
              <img src={eggOh} alt='Pokeball icon' />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {message && <ErrorMessage color={'mediumseagreen'}>{message}</ErrorMessage>}
            </span>
            <div className='wrap-input'>
              <input type='email' placeholder='Email' ref={emailRef} required />
              <span className='focus-input'></span>
            </div>
            <div className='wrap-password'>
              <Link className='txt-password' to='/login'>
                Go to Login
              </Link>
            </div>
            <div className='container-form-btn'>
              <div className='wrap-form-btn'>
                <button disabled={isLoading} type='submit' className='login'>
                  Reset Password
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

export default ForgotPassword;
