import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/Global";
import withApollo from "../lib/apollo";
import { AuthProvider } from "../context/AuthContext";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default withApollo()(MyApp);
