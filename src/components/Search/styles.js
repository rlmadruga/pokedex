import styled from 'styled-components';

export const SearchWrap = styled.div`
  width: 30%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  clear: both;
`;

export const SearchInternal = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: 3px solid #f2f2f2;
  border-left: none;
  padding: 5px;
  height: 50px;
  border-radius: 0 10px 10px 0px;
  outline: none;
  color: #747476;
  line-height: 20px;
  font-size: 1rem;
  font-weight: 400;

  &:focus {
    color: #17171b;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 50px;
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  text-align: center;
  color: #747476;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  font-size: 20px;
`;
