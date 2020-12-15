import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  grid-gap: 1rem;
`

export const Card = styled.div`
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.5);
  width: 350px;
  `

export const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`