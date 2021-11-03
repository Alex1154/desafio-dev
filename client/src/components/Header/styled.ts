import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    h1 {
      margin-bottom: ${theme.spacings.xxsmall};
      text-align: center;
      font-size: ${theme.font.sizes.xxlarge};
    }
    h2 {
      text-align: center;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
