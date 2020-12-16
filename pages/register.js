import React, { useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { register } from "../lib/auth";
import {
  Form,
  InputContainer,
  Label,
  Input,
  Button,
} from "../styles/Form";
import { Container } from "../styles/Global";

export default function Register() {
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

  const handleSubmit = async (e) => {
    const { username, email, password } = formData;
    const authenticated = await register( username, email, password);
    setUser(authenticated.user);

  }

  return (
    <Container>
      Register
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
        <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
      </Form>
    </Container>
  );
}
