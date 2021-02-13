import styled from 'styled-components';

import { colors } from '../../../../styles';

interface IProps {
  visible: boolean;
}
export const ButtonHamburger = styled.button<IProps>`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: ${(props) => (props.visible === false ? '50%' : '3px')};

  position: absolute;
  background: ${(props) =>
    props.visible === false ? '#d4c2ff' : 'transparent'};

  display: inline-block;

  top: ${(props) => (props.visible === false ? '3.6rem' : '2.6rem')};
  left: ${(props) => (props.visible === false ? '280px' : '1rem')};

  @media (min-width: 974px) {
    display: none;
  }

  &.active {
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }

  span {
    background: var(--text-body-bg);

    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: ${(props) => (props.visible === false ? '25px' : '50%')};
    left: ${(props) => (props.visible === false ? '25px' : '1rem')};

    transform: translate(-50%, -50%);
    border-radius: 10px;
    &:before,
    &:after {
      content: '';
      background: var(--text-body-bg);
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }
  }
`;
