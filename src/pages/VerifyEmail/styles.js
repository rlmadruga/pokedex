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
  width: 50vw; /*1006px */
  height: auto; /*503px */
  min-width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const ImageWrapper = styled.div`
  width: auto; /*50%*/
  height: 503px; /**100% */
  float: left;
  min-width: 250px;
  box-sizing: border-box;

  img {
    width: 25vw;
    min-width: 250px;
    height: 503px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  width: 50%;
  height: 503px;
  float: right;
  padding: 15% 21px 27px 30px;
  div:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;

export const Text = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

export const SubText = styled(Text)`
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;

  img {
    position: relative;
    left: 35%;
    margin-top: 30px;
    width: 50px;
  }
`;
