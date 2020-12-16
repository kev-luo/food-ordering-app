import React, { useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import {
  RegisterForm,
  InputContainer,
  Label,
  Input,
  Button,
} from "../styles/Register";
import { Container } from "../styles/Global";

export default function register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    }) 
  }

  return (
    <Container>
      Register
      <RegisterForm>
        <InputContainer>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </InputContainer>
        <Button>Sign Up</Button>
      </RegisterForm>
    </Container>
  );
}
