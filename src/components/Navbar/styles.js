import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  height: 75px;
  z-index: 100;

  font-family: PokemonH;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background-color: #ff0000;
  line-height: 75px;

  @media (max-width: 800px) {
    /* height: 40px; */
    justify-content: space-between;

    body {
      padding-top: 40px;
    }
  }

  a {
    color: #fff;
    font-family: Pokemon;
    font-size: 2rem;
    /* font-weight: bold; */
    letter-spacing: 3px;
    text-decoration: none;
  }

  div.div-internal {
    display: flex;
    line-height: 45px;

    a {
      font-family: Lato, sans-serif;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;

      background: linear-gradient(to bottom, #fff 0%, #fff 100%);
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 4px 4px;

      transition: 0.3s;

      &:hover {
        background-size: 4px 50px;
        color: #ff0000;
      }
    }

    p {
      font-weight: 700;
      padding: 0 10px;
    }
  }
`;
