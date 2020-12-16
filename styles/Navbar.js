import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  height: 4.5em;
  background: ${({ theme }) => theme.light.orange};
  color: ${({ theme }) => theme.light.black}
`

export const NavBrand = styled.div`
  margin-left: 2em;
  font-size: 1.5em;
  letter-spacing: .25rem;
`

export const NavItem = styled.div`
  display: flex;
  margin: 0 2em;
`

export const NavLogo = styled.a`

`

export const NavLink = styled.a`
  margin: 0 2em;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`
