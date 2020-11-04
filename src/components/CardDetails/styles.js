import styled from 'styled-components';

export const CardDetailsWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const CardDetailsMain = styled.div`
  position: fixed;
  width: 50vw;
  height: auto;
  min-width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
`;

export const CardDetailsImage = styled.div`
  width: auto;
  height: 503px;
  float: left;
  min-width: 250px;
  box-sizing: border-box;
  img {
    width: 25vw;
    min-width: 250px;
    height: 503px;
    object-fit: contain;
  }
`;

export const CardDetailsContainer = styled.div`
  width: 50%;
  height: 503px;
  float: right;
  padding: 32px 21px 27px 30px;
  div:after {
    content: '';
    display: table;
    clear: both;
  }
  i {
    cursor: pointer;
    position: absolute;
    right: 1rem;
  }
`;

export const CardDetailsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const CardDetailsSubTitle = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;

export const CardDetailsText = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

export const CardDetailsSubText = styled(CardDetailsText)`
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;
