import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
`;

export const theme = {
  light: {
    yellow: "#F2CE16",
    pink: "#F28095",
    orange: "#F2BB16",
    green: "#B4D966",
    green2: "#BFE66C",
    white: "#F2F2F2",
    black: "#000",
  },
};

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  /* border: 1px solid black; */
`;
