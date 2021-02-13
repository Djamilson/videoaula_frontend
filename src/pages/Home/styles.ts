import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  width: 100vw;
  height: 200vh;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;

  border: 0;
  padding-bottom: 2rem;
  margin-top: -2rem;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const Box = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: var(--space-lgs);
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: 2rem;
    flex-direction: row;
    padding: 3rem;
    margin-top: 0rem;
  }

  border: 0px;
  color: ${colors.colorTextInPrimary};
  background: ${colors.colorPrimary};

  img {
    width: 33rem;
    height: 18rem;
    margin-left: 2rem;

    @media (min-width: 1024px) {
      margin-top: 4rem;
      margin-bottom: 2rem;
      border: 0;
      margin-left: -2.5rem;
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
  margin-top: var(--space-lm);

  @media (min-width: 1024px) {
    margin-top: 5rem;
    padding: 0 40px;
  }

  > img {
    height: 4rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;

      @media (min-width: 1024px) {
        text-align: center;
        font-size: 1.2rem;
      }

      @media (min-width: 768px) {
        flex-direction: column;
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    h2 + h2 {
      margin-left: 6rem;
    }

    h2:first-child {
      margin-top: 2rem;
    }

    @media (min-width: 1024px) {
      text-align: center;
      font-size: 1.2rem;
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
  width: 100%;
  height: 150vh;
  font-weight: 500;
  font-size: 1.6rem;

  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
  border: 0;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    margin-top: -3rem;
  }

  @media (max-width: 768px) {
    margin-top: 8rem;
    margin-right: 5rem;
    justify-content: center;
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      font-weight: 500;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};
      margin-bottom: 0.6rem;
      @media (min-width: 1024px) {
        text-align: initial;
        font-size: 1.6rem;
        margin-right: 1.5rem;
        margin-bottom: 0rem;
      }
    }
    strong {
      font-weight: 700;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};

      margin-bottom: 2rem;

      @media (min-width: 1024px) {
        text-align: initial;
        font-size: 1.6rem;
        margin-right: 1.5rem;
        margin-bottom: 0rem;
      }
    }

    @media (max-width: 768px) {
      margin-left: 5rem;
    }
  }

  span {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 0.8rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;

    font-weight: 500;
    font-size: 0.8rem;
    color: ${colors.colorTextTitle};

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      margin-left: 5rem;
    }

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
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 40vw;

  margin-left: 4rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 10rem;
    width: 100%;
  }
  @media (max-width: 425px) {
    margin-top: 0px;
    margin-left: 5rem;
    width: 100%;
  }

  border: 0;
  a {
    width: 15rem;
    height: 4rem;
    border-radius: 0.4rem;
    font: 700 1.4rem Poppins;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.colorButtonText};
    margin-bottom: 2rem;

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;

    @media (max-width: 768px) {
      margin-right: 0rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    a {
      margin-bottom: 0rem;
    }
  }

  @media (max-width: 768px) {
    a {
      margin-right: 0rem;
    }
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
