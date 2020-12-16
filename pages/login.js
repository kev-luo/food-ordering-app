import React, { useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { login } from "../lib/auth";
import {
  Form,
  InputContainer,
  Label,
  Input,
  Button,
} from "../styles/Form";
import { Container } from "../styles/Global";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
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

  const handleSubmit = async (e) => {
    const { identifier, password } = formData;
    const authenticated = await login( identifier, password);
    setUser(authenticated.user);
  }

  return (
    <Container>
      Login
      <Form>
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
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </InputContainer>
        <Button type="submit" onClick={handleSubmit}>Login</Button>
      </Form>
    </Container>
  );
}