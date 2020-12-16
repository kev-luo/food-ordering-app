import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  place-items: center;
  gap: 2rem 2rem;
`;

export const Card = styled.div`
  position: relative;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 20rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  height: 13rem;
`;

export const Name = styled.h3`
  text-align: center;
  flex: 1;
  margin-bottom: 0;
  text-transform: capitalize;
  /* border: 1px solid black; */
`;

export const Description = styled.p`
  flex: 1;
  margin-bottom: 4rem;
  /* border: 1px solid black; */
`;

export const Button = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1em;
  left: 5%;
  height: 2rem;
  width: 5rem;
  background: ${({ theme }) => theme.light.green};
  color: ${({ theme }) => theme.light.black};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 100ms linear;
  &:hover {
    background: ${({ theme }) => theme.light.green2};
  }
`;

export const SingleRestaurant = styled.h2`
  text-align: center;
`