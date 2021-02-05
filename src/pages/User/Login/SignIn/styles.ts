import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../../../assets/backgroundLogin.png';
import Button from '../../../../components/Button';
import { colors } from '../../../../styles';

export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: stretch;
  margin-left: -2.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-50px);
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
  animation: ${appearFromLeft} 1s;

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

    transition: color 0.2s;
    font-family: 'Poppins', sans-serif;
    color: ${colors.colorTextTitle};
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, colors.colorTextTitle)};
    }
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60vw;
  height: auto;
  background: ${colors.colorPrimary};

  div {
    display: flex;
    width: 45vw;
    min-width: 45vw;
    height: 90vh;
    margin: 2rem;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: contain;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 10rem;
        height: auto;
      }
      > span {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;

        @media (min-width: 1100px) {
          text-align: initial;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const MyButton = styled(Button)`
  width: 70%;
  border-radius: 4px;
  margin: 30px 15% 0 15%;
`;
