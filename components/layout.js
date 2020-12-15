import React from 'react'
import Head from "next/head";
import Link from "next/link";

import { Nav, NavItem, NavLogo, NavLink } from "../styles/Navbar";
import { Container } from "../styles/Global";

export default function Layout({ children }) {
  const title = "Get Your Grub On"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav>
        <NavItem>
          <NavLogo>Grubs</NavLogo>
        </NavItem>
        <NavItem>
          <NavLink>Login</NavLink>
          <NavLink>Register</NavLink>
        </NavItem>
      </Nav>
      <Container>{children}</Container>
    </>
  )
}
