import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: sans-serif;
    background-color: #fafafa;
    color: #333;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
