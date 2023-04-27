import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-primary: #212121;
    --color-secondary: #f5f5f5;
    --color-tertiary: #bdbdbd;
    --color-light: #e0e0e0;
    --color-dark: #757575;
    --color-accent: #ffa000;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }



  a{
    text-decoration: none;
  }
`;
