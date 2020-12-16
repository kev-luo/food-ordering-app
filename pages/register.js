import React, { useState } from 'react'

import { useAuthContext } from "../context/AuthContext";
import { RegisterForm, InputContainer, Label, Input, Button } from "../styles/Register";
import { Container } from "../styles/Global";

export default function register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: ""})
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuthContext();

  

  return (
    <Container>
      Register
      <RegisterForm>
        <InputContainer>
          <Label>Username</Label>
          <Input type="text"/>
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input type="text"/>
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input type="text"/>
        </InputContainer>
        <Button>Sign Up</Button>
      </RegisterForm>
    </Container>
  )
}
