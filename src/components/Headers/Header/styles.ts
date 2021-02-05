import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles';

interface Props {
  visible: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-142px);
    background: ${colors.colorPrimary};
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    background: ${colors.colorBoxBase};
  }
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(80px);
  }

`;
export const Container = styled.div<Props>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: all 0.5s ease;
  animation: ${(props) => (props.visible ? fadeOut : fadeIn)} 500ms linear;

  padding: 0 3rem;
  padding-top: ${(props) => (props.visible ? '1rem' : '3rem')};
  padding-bottom: ${(props) => (props.visible ? '2rem' : '5rem')};

  background: ${colors.colorPrimary};
  border: 0;
  z-index: 5;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: none;
    align-items: center;

    margin-right: var(--space-lg);

    @media only screen and (max-width: 974px) {
      display: flex;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 52px;

  background: ${colors.colorPrimary};
  a {
    > img {
      height: 3rem;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 52px;

  margin-top: -2.8rem;
  color: ${colors.colorTextInPrimary};
`;

export const BoxLogin = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    align-items: center;
    justify-content: center;

    span {
      color: ${colors.colorTextInPrimary};
    }

    a {
      text-decoration: none;
      color: #ff9000;
      display: flex;

      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      span svg {
        color: #fff;
        margin-top: 5px;
        width: 20px;
        height: 20px;
        margin-left: 15px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  margin-left: 45%;

  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: ${colors.colorTextInPrimary};
    }
  }
`;

export const BoxLogado = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  display: inline-block;
  align-items: center;

  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.colorTitleInPrimary};
    }

    span {
      font-size: 12px;
      color: ${colors.colorTextInPrimary};
    }
  }
`;

export const ProfileLink = styled(Link)`
  display: none;
  align-items: center;

  text-decoration: none;
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }

  svg {
    color: ${colors.colorTitleInPrimary};
    width: 40px;
    height: 40px;
  }

  div {
    width: 100%;
    text-align: right;

    strong {
      color: ${colors.colorTitleInPrimary};
    }

    span {
      font-size: 12px;
      color: ${colors.colorTextInPrimary};
    }
  }

  @media only screen and (min-width: 974px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavLink = styled(Link)`
  display: none;
  padding-right: 20px;
  margin-left: 50px;
  margin-top: 5px;

  img {
    height: 3rem;
  }

  @media only screen and (min-width: 974px) {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: flex-end;
  align-items: center;
  border: 0;

  margin-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.colorButtonText};
      font-weight: bold;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  width: 110px;
  display: flex;
  align-items: center;

  text-decoration: none;
  transition: opacity 0.2s;
  justify-content: center;
  flex-direction: row;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    width: 100%;

    span {
      font-size: 14px;
      color: ${colors.colorTextInPrimary};
    }
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  margin-right: 50px;
`;
