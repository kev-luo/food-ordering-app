import styled from "styled-components";

export const RegisterForm = styled.form`
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
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

export const Label = styled.label``;

export const Input = styled.input`
  width: 50%;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 26.3%;
  width: 8rem;
  height: 1.5rem;
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
