import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../../../styles';

export const Container = styled.li`
  margin-top: 0rem;

  > fieldset {
    border: 0;
    border-bottom: 1px solid ${colors.colorLineInWhite};
    margin-top: 0rem;
    width: 100%;
    margin-bottom: 1.4rem;
    section {
      padding: 0;
      display: flex;
      flex-flow: row;
      text-align: center;
      background: ${colors.colorBoxBase};
      > span {
        background: none;
        flex: 1;
        padding: 10px;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-top: 5px;
        }
      }
      article {
        width: 30px;
        background: none;
        text-align: left;
        padding: 0px 10px 10px 10px;
        display: flex;
        flex-direction: column;

        > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          head {
            padding: 15px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            div {
              display: flex;
              flex-direction: row;
              span {
                font-size: 13px;
                font-weight: bold;
                color: ${colors.colorTextInPrimary};
                margin-right: 10px;
              }

              strong {
                width: 100%;
                display: flex;
                color: ${colors.colorTextInWhite};
              }
            }
          }
        }

        p {
          max-width: 500px;
          font-size: 13px;
          line-height: 18px;
          color: ${colors.colorTextSecundary};
        }

        flex: 5;
      }
      aside {
        flex: 1;
        flex-direction: row-reverse;
        display: flex;
        align-items: flex-end;

        padding: 0;
        > span {
          background: none;
          flex-direction: row;
          display: flex;
          padding: 0;
          margin-bottom: 10px;

          button {
            background: none;
            color: #7159c1;
            border: 0;
            border-radius: 2px;
            width: auto;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.02s;

            &:hover {
              color: ${shade(0.2, '#7159c1')};
              transform: translateY(-2px);
              border-radius: 2px;
            }

            strong {
              font-size: 11px;
              flex: 1;
              text-align: center;
              font-weight: bold;
            }
          }
          button + button {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

export const ContainerAnswer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;
  border: 0;
  width: 85%;
  margin-left: auto;
  margin-top: 20px;
`;
