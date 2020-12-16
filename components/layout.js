import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Nav, NavBrand, NavItem, NavLogo, NavLink } from "../styles/Navbar";
import { Container } from "../styles/Global";

export default function Layout({ children }) {
  const title = "Get Your Grub On";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav>
        <NavBrand>
          <Link href="/" passHref>
            <NavLogo>Grubs</NavLogo>
          </Link>
        </NavBrand>
        <NavItem>
          <Link href="/login" passHref>
            <NavLink>Login</NavLink>
          </Link>
          <Link href="/register" passHref>
            <NavLink>Register</NavLink>
          </Link>
        </NavItem>
      </Nav>
      <Container>{children}</Container>
    </>
  );
}
