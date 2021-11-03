import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > P {
      display: flex;
      cursor: pointer;
      margin-top: ${theme.spacings.xlarge};
      background-color: blue;
      border-radius: 25px;
      height: 30px;
      align-items: center;
      justify-content: center;
      width: 10%;
      text-align: center;
      padding-left: 5px;
      color: ${theme.colors.white};
      font: ${theme.font.sizes.large};
      transition: 0.15s;
    }
    > P:active {
      background-color: white;
      transform: translateY(2px);
      opacity: 0.95;
    }
  `}
`
// #input {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   cursor: pointer;
//   background-color: black;
//   color: white;
//   width: auto;
//   border-radius: 25px;
// }
