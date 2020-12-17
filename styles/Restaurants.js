import styled from "styled-components";

// restaurants page
// ===============================================================
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

// dishes page
// ===============================================================
export const SingleRestaurant = styled.h2`
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
`;

export const DishesContainer = styled(ListContainer)`
  flex: 4;
`;

// cart component
// ===============================================================
export const CartContainer = styled.div`
  flex: 2;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 3rem);
  grid-row-gap: 0;
  padding: 1rem 1rem 0rem 1rem;
  max-height: 100%;
  overflow: auto;
`;

export const CartTitle = styled.h3`
  grid-column: 1/-1;
  grid-row: 1/1;
  place-self: center;
`;

// single dish in card
// ===============================================================
export const DishRow = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr .5fr .5fr .5fr .5fr;
  grid-template-areas: "dishTitle quantity price dishTotal toggle";
`;

export const DishName = styled.div`
  grid-area: dishTitle;
`;

export const DishQty = styled.div`
  grid-area: quantity;
  justify-self: center;
`;

export const DishPrice = styled.div`
  grid-area: price;
  justify-self: center;
`;

export const DishTotal = styled.div`
  grid-area: dishTotal;
  justify-self: center;
`;

export const Toggle = styled.div`
  grid-area: toggle;
  align-self: start;
  justify-self: center;
  display: flex;
  margin-top: 6px;
  button:nth-child(even) {
    margin-left: .2rem;
  }
  button {
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`


// cart footer
// ===============================================================
export const CartFooterTitle = styled.div`
  grid-column: 1/1;
  justify-self: start;
`;

export const CartFooterTotal = styled.div`
  grid-column: 2/2;
  justify-self: end;
  margin-right: 10%;
`;

export const OrderBtn = styled(Button)`
  grid-column: 2/2;
  justify-self: end;
  margin-right: 10%;
  position: static;
`

export const ClearBtn = styled.button`
  grid-column: 1/1;
  place-self: start;
  position: static;
  width: 5rem;
  height: 2rem;
  background: ${({theme}) => theme.light.green};
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 16px;
  &:hover {
    background: ${({ theme }) => theme.light.green2};
    cursor: pointer;
  }
`