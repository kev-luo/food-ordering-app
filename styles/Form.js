import styled from "styled-components";

export const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  /* border: 1px solid black; */
  position: relative;
  padding: 1rem;
  padding-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: .8rem;
  margin-bottom: .5rem;
`;

export const Input = styled.input`
  width: 100%;
  box-shadow:  0px 1px 3px rgba(50, 50, 93, 0.15);
  border: none;
  padding: 10px 14px;
  &:focus {
    outline: 1.5px solid ${({ theme }) => theme.light.orange};
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 1rem;
  width: 8rem;
  height: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: ${({ theme }) => theme.light.pink};
  border: none;
  color: ${({ theme }) => theme.light.white};
  transition: all 100ms linear;
  &:hover {
    background: ${({ theme }) => theme.light.pink2};
    color: ${({ theme }) => theme.light.black};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
