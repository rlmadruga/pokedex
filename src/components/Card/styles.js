import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#eee')};
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;

    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #defde0;
  }

  img.img-favorite {
    width: 30px;
    padding-bottom: 10px;
    filter: grayscale(100%) invert(100%);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: none;
      transition: 0.2s;
    }
  }
`;

export const ImgContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;

  img {
    margin-top: 15px;
    max-width: 100%;
    width: 100px;
  }
`;

export const Info = styled.div`
  margin-top: 20px;
  span {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
  }
  h3 {
    margin: 15px 0 7px;
    letter-spacing: 1px;
  }

  span.none {
    background-color: transparent;
  }
`;
