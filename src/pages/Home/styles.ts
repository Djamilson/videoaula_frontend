import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 0;
`;

export const Box = styled.div`
  width: 100vw;
  margin-left: 0;
  margin-right: 0;
  height: 90vh;
  padding-top: 1rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border: 0px;

  color: ${colors.colorTextInPrimary};
  background: ${colors.colorPrimary};

  > img {
    height: 18rem;
    margin-left: 2rem;
    @media (min-width: 1100px) {
      height: 90%;
    }
  }
`;

export const ContainerLogo = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0;

  > img {
    height: 4rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
  }

  @media (max-width: 700px) {
    margin-top: 300px;
  }
`;

export const Footer = styled.div`
  height: 10vh;
  font-weight: 500;
  font-size: 1.6rem;

  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  > section {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-right: 1.5rem;
      font-weight: 500;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};

      @media (min-width: 1100px) {
        text-align: initial;
        font-size: 1.6rem;
      }
    }
    strong {
      font-weight: 700;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};

      @media (min-width: 1100px) {
        text-align: initial;
        font-size: 1.2rem;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 0.8rem;
    margin-left: 2.5rem;

    font-weight: 500;
    font-size: 0.8rem;
    color: ${colors.colorTextTitle};

    strong {
      margin-left: 1rem;
      > img {
        height: 0.8rem;
        margin-left: 1rem;
        @media (min-width: 1100px) {
          height: 100%;
        }
      }
    }

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 0.8rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  max-width: 40vw;

  margin-left: 4rem;
  > a {
    width: 15rem;
    height: 4rem;
    border-radius: 0.4rem;
    font: 700 1.4rem Poppins;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.colorButtonText};

    transition: background-color 0.2s;

    @media (min-width: 1100px) {
      font-size: 1.4rem;
    }
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const LinkStudy = styled(Link)`
  background: ${colors.colorPrimaryLighter};
  img {
    height: 30px;
    margin-right: 16px;
  }
  &:hover {
    background: ${shade(0.2, `${colors.colorPrimaryLight}`)};
  }
`;

export const LinkGiveClasses = styled(Link)`
  background: ${colors.colorSecundary};
  img {
    margin-right: 16px;
    height: 30px;
  }
  &:hover {
    color: ${colors.colorButtonText};

    background: ${shade(0.2, `${colors.colorSecundaryDark}`)};
  }
`;
