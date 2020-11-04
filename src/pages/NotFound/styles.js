import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  position: fixed;

  height: auto;
  min-width: 500px;
  top: 50%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  img {
    border-radius: 90%/90%;
    margin: auto;
    padding: 30px;
  }
  @media only screen and (max-width: 600px) {
    position: absolute;
    width: 100vw;
    margin: 10%;
    img {
      width: 400px;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 15px;
  background-color: #ff0000;
  color: #fff;
  line-height: 1.2;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 50%;
  height: 50px;

  cursor: pointer;
  transition: 0.2s;

  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    transition: 0.2s;
    background-color: #ea5d60;
    color: #fff;
  }

  &:disabled {
    background-color: #e2e2e2;
  }
`;
