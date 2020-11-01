import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;
`;

export const LoginWrap = styled.div`
  width: 390px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;

  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const LoginForm = styled.form`
  width: 100%;

  span.login-form-title {
    display: block;
    font-family: Pokemon;
    font-size: 36px;
    color: #ff0000;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 26px;
    letter-spacing: 3px;
  }

  img {
    text-align: center;
    width: 50px;
    padding-bottom: 48px;
  }

  div.wrap-input {
    width: 100%;
    position: relative;
    /* border-bottom: 2px solid #adadad; */
    margin-bottom: 37px;
  }

  input {
    font-family: Lato, sans-serif;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    border: 1px solid rgba(85, 85, 85, 0.3);
    border-radius: 10px;

    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
    padding: 0 5px;
  }

  span.focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  div.container-form-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 13px;
  }

  div.wrap-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
  }

  button.login {
    font-family: Lato, sans-serif;
    font-size: 15px;
    background-color: #ff0000;
    color: #fff;
    line-height: 1.2;
    border: none;
    text-transform: uppercase;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      background-color: #ea5d60;
      color: #fff;
    }
  }
`;

export const FooterForm = styled.div`
  text-align: center;
  padding-top: 15px;

  span.txt,
  a.txt {
    font-family: Lato, sans-serif;
    font-size: 13px;
    color: #666666;
    line-height: 1.5;
  }

  a.txt {
    text-decoration: none;
    margin-left: 5px;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      background-color: #fff;
      color: #ff0000;
      text-decoration: underline;
    }
  }
`;

export const ErrorMessage = styled.button`
  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  color: tomato;
  border: 2px solid tomato;
  border-radius: 3px;
`;
