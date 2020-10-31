import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    50%{
        transform: scale(0.7);
    }
`;

export const Pokeball = styled.div`
  height: 250px;
  width: 250px;
  border: 13px solid #383b4f;
  border-radius: 50%;
  background-image: linear-gradient(#f51939 125px, white 125px);
  position: relative;
  animation: ${grow} 2s infinite;

  &:before {
    position: absolute;
    content: '';
    height: 25px;
    width: 250px;
    background-color: #383b4f;
    top: 112.5px;
  }

  &:after {
    position: absolute;
    content: '';
    height: 90px;
    width: 90px;
    background-image: radial-gradient(
      #fff 0px,
      #fff 10px,
      #383b4f 10px,
      #383b4f 15px,
      #fff 15px,
      #fff 32px,
      #383b4f 32px
    );
    border-radius: 50%;
    top: 80px;
    left: 80px;
  }
`;
