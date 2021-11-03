import styled, { css } from 'styled-components'

export const DropZone = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px dotted ${theme.colors.primary};
    background: ${theme.colors.white};
    width: 100%;
    height: 20rem;
    svg {
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xxsmall};
    }
    > P {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray};
      font: ${theme.font.sizes.small};
    }
  `}
`
