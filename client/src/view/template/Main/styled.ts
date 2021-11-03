import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
  `}
`
