import React from 'react'

import { GlobalStyle } from "../styles/Global";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component { ...pageProps} />
      </Layout>
    </>
  )
}
