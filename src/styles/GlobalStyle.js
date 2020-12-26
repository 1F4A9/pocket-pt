import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg-primary: #06090f;
    --color-bg-secondary: #161b22;
    --color-bg-tertiary: #0d1117;

    --color-text-primary: #a4d1d9;
    --color-border-primary: #30363d;

    --color-scale-blue-1: #51a6ff;
    --color-scale-blue-1-opacity: rgba(81, 166, 255, 0.2);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Catamaran', sans-serif;
  }

  body {
    background-color: var(--color-bg-primary);
  }
`;

export default GlobalStyle;
