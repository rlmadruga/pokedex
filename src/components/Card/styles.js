import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#eee')};
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
`;

export const ImgContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;

  img {
    margin-top: 20px;
    max-width: 90%;
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
