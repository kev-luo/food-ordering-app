import styled from "styled-components";
import { Form } from "./Form";

export const CheckoutContainer = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  flex: 1;
  margin-left: 1rem;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const FormCheckout = styled(Form)`
  width: 90%;
`;

export const CardDiv = styled.div`
  width: 100%;
  .StripeElement {
    box-shadow: 0px 1px 3px rgba(50, 50, 93, 0.15);
    padding: 10px 14px;
  }
`;
