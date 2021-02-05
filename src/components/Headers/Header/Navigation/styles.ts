import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { colors } from '../../../../styles';

export const Navigation = styled.ul`
  display: none;
  flex-direction: column;
  margin-top: var(--space-sm) var(--space-sm);

  &.active {
    display: flex;
  }

  @media only screen and (min-width: 974px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1040px) {
    display: flex;
    justify-content: flex-end;
  }

  a + a {
    margin-left: 5px;
  }
`;

interface Props {
  selected?: boolean;
}

export const MenuLI = styled.li`
  margin-left: 0px;
  padding: 3px;
  border-radius: 4px;
  background: none;
  list-style-type: none;
  max-width: 220px;
  transition: transform 0.3s ease-in-out;

  strong {
    display: block;
    color: #7159c1;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
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

export const NavigationLink = styled(Link)<Props>`
  color: ${(props) =>
    props.selected
      ? `${colors.colorTextInWhite}`
      : `${colors.colorButtonText}`};

  position: relative;
  font-size: 16px;
  font-weight: bold;
  padding: 0 var(--space-sm);
  margin-bottom: var(--space-sm);
  text-align: center;

  background: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;

  span {
    display: block;
    background: rgba(0, 0, 0, 0);
    width: 22px;
    height: 2.8rem;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  &.active {
    font-weight: bold;
    transform: translateY(-5px);

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`;
