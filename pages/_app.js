import React from 'react'
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/Global";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component { ...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
