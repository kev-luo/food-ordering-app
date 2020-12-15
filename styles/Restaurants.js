import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  gap: 2rem 2rem;
`;

export const Card = styled.div`
  position: relative;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 350px;
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
`;

export const Name = styled.h3`
  text-align: center;
  flex: 1;
  margin-bottom: 0;
`;

export const Description = styled.p`
  flex: 1;
  margin-bottom: 4rem;
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
  letter-spacing: .1em;
  &:hover {

  }
`;
