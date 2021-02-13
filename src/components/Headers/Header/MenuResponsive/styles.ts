import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

import { colors } from '../../../../styles';

interface Props {
  visible: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(80px);
  }

`;

export const Container = styled.ul`
  z-index: 11;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2px;
  margin-top: 20px;
`;

export const OrderLI = styled.li`
  margin-left: 10px;
  border-radius: 4px;
  background: #fff;
  max-width: 220px;
  transition: transform 0.3s ease-in-out;
  padding: 8px;
  span {
    border: 0;
    display: block;
    color: #7159c1;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    margin-left: 20px;
  }
  &:hover,
  &.active {
    font-weight: bold;
    opacity: 0.6;
    transform: translateY(-5px);
    transition: all 0.2s;

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`;
interface IProps {
  selected?: boolean;
}

export const NavigationLink = styled(Link)<IProps>`
  color: ${(props) =>
    props.selected
      ? `${colors.colorTextInWhite}`
      : `${colors.colorButtonText}`};
  text-decoration: none;
  position: relative;
  font-weight: bold;
  text-align: center;

  &:hover,
  &.active {
    font-weight: bold;
    opacity: 0.6;
    /* transform: translateY(-5px);*/
    transition: all 0.2s;
  }
`;

export const Badge = styled.button`
  background: none;
  border-left: 1px solid #eee;
  margin-left: 20px;
  border: 0;
  position: relative;
  right: 0;
  top: 0;
`;
