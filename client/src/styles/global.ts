import { createGlobalStyle, css } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
    }

    h2 {
      color: ${theme.colors.lightGray};
    }

    h1 {
      color: ${theme.colors.lightGray};
    }
  `}
`

export default GlobalStyles
