import styled from "styled-components";

export const Search = styled.input`
  width: 50%;
  height: 2rem;
  margin-left: 25%;
  margin-bottom: 2rem;
  transition: all 100ms linear;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.light.orange};
    border: none;
  }
`

export const SearchBtn = styled.button`
  width: 7rem;
  padding: .5rem;
  margin-left: 1rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: ${({theme}) => theme.light.green};
  border: none;
  transition: all 100ms linear;
  &:hover {
    background: ${({ theme }) => theme.light.green2};
    cursor: pointer;
  }
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.light.white}
  }
`