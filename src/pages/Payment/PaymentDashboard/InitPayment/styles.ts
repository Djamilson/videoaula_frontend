import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../../../styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 0rem;
  background: ${colors.colorTitleInPrimary};
  border: 0;

  fieldset {
    border: 0;
    padding: 4rem;
    height: 70vh;

    legend {
      font: 700 1.3rem Poppins;
      color: ${colors.colorTextTitle};
      margin-bottom: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid ${colors.colorLineInWhite};
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: stretch;
      margin-bottom: 0.6rem;

      h2 {
        color: ${colors.colorTextcomplement};
        font: 700 0.8rem Poppins;
        margin-left: 10px;
      }
      strong {
        margin-left: 10px;
        font: 700 0.8em Poppins;
        font-size: 15px;
        line-height: 20px;
        color: #333;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      line-height: 1.4rem;
      color: ${colors.colorTextcomplement};
      margin-bottom: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonCreditCard = styled.button`
  background: ${colors.colorPrimaryLighter};

  border: 0;
  width: 20rem;
  height: 4rem;

  text-decoration: none;
  color: ${colors.colorButtonText};
  transition: background-color 0.2s;

  border-radius: 0.4rem;
  font: 700 1.4rem Poppins;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
    margin-right: 16px;
  }
  &:hover {
    background: ${shade(0.2, `${colors.colorPrimaryLight}`)};
  }
`;

export const ButtonAnother = styled.button`
  background: ${colors.colorSecundary};
  border: 0;
  width: 20rem;
  height: 4rem;

  text-decoration: none;
  color: ${colors.colorButtonText};
  transition: background-color 0.2s;

  border-radius: 0.4rem;
  font: 700 1.4rem Poppins;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 16px;
    height: 30px;
  }
  &:hover {
    color: ${colors.colorButtonText};

    background: ${shade(0.2, `${colors.colorSecundaryDark}`)};
  }
`;
