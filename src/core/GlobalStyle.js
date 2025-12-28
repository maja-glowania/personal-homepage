import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textPrimary};
    word-break: break-word;
    margin: 0;
  }
`;
