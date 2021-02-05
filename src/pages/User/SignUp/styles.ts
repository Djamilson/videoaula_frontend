import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signUpBackgroundImg from '../../../assets/sign-up-background.jpg';
import { colors } from '../../../styles';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
  }
  to{
    opacity:1;
    transform: translateX(0px)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;

  form {
    margin-top: 60px;
    margin-bottom: 30px;
    width: 340px;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    h1 {
      margin-bottom: 24px;
      font-family: 'Poppins', sans-serif;
      color: ${colors.colorTextTitle};
    }

    a {
      color: ${colors.colorTextcomplement};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      padding-bottom: -110px;
      font-family: 'Poppins', sans-serif;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: block;
    bottom: 80px;
    text-decoration: none;
    transition: color 0.2s;
    font-family: 'Poppins', sans-serif;
    color: ${colors.colorTextTitle};

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, colors.colorTextTitle)};
    }
  }

  img {
    width: 10rem;
    height: auto;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
