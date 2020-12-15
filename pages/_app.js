import React from 'react'
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/Global";
import withApollo from "../lib/apollo";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
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

export default withApollo()(MyApp);