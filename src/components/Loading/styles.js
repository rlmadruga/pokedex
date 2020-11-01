import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    50%{
        transform: scale(0.7);
    }
`;

export const Pokeball = styled.div`
  height: 125px;
  width: 125px;
  border: 13px solid #383b4f;
  border-radius: 50%;
  background-image: linear-gradient(#f51939 62.5px, white 62.5px);
  position: relative;
  animation: ${grow} 2s infinite;

  &:before {
    position: absolute;
    content: '';
    height: 25px;
    width: 125px;
    background-color: #383b4f;
    top: 56.25px;
  }

  &:after {
    position: absolute;
    content: '';
    height: 45px;
    width: 45px;
    background-image: radial-gradient(
      #fff 0px,
      #fff 5px,
      #383b4f 5px,
      #383b4f 10px,
      #fff 10px,
      #fff 16px,
      #383b4f 16px
    );
    border-radius: 50%;
    top: 40px;
    left: 40px;
  }
`;
