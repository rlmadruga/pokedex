import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 20px;
    letter-spacing: 3px;
  }

  .Favorite {
    width: 40%;
    margin-top: 130px;

    img {
      width: 50px;
      float: right;

      filter: grayscale(100%) invert(100%);
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        filter: none;
        transform: scale(1.5);
        transition: 0.4s;
      }
    }
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 100px auto;
  max-width: 1200px;
`;
