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
`;

export const theme = {
  colors: {
    primary: "rgba(243, 20, 0)"
  }
}

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  border: 1px solid black;
`;
