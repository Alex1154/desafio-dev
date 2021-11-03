import styled, { css } from 'styled-components'

export const Table = styled.table`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    width: 100%;
    background: ${theme.colors.white};
    border-spacing: 0 16px;
    text-align: center;
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    thead {
      color: ${theme.colors.darkGray};
    }
  `}
`
