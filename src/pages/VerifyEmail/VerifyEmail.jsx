import React from 'react';
import {
  Wrapper,
  Main,
  ImageWrapper,
  Container,
  Text,
  Title,
  SubTitle,
  SubText,
} from './styles';
import Navbar from '../../components/Navbar/Navbar';
import Pikachu from '../../assets/images/pikachu.jpg';
import Star from '../../assets/images/Star_icon.svg';

const VerifyEmail = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Main>
          <ImageWrapper>
            <img src={Pikachu} alt='Pikachu' />
          </ImageWrapper>
          <Container>
            <Title>Hello!</Title>
            <SubTitle>Thank you for creating an account!</SubTitle>
            <Text>
              We have sent you an email to verify your account. <br />
              Please check it to get access to our site.
            </Text>
            <SubText>
              <img src={Star} alt='Star' />
            </SubText>
          </Container>
        </Main>
      </Wrapper>
    </>
  );
};

export default VerifyEmail;
