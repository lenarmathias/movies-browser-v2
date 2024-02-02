import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.bgLightGrey};
    margin: 150px auto 103px !important;
    width: 1368px;
    max-width: 85%;
    font-family: "Poppins", sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: 166px;
    }
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }
`;