import axios from "axios";
import Router from "next/router";
import Cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const register = async (username, email, password) => {
  // only run function on client
  if (typeof window === "undefined") {
    return;
  }
  try {
    const { data } = await axios.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    });

    Cookie.set("token", data.jwt);
    Router.push("/");
    return data;
  } catch (err) {
    return err;
  }
};

export const login = async (identifier, password) => {
  // only run function on client
  if (typeof window === "undefined") {
    return;
  }
  try {
    const { data } = await axios.post(`${API_URL}/auth/local`, { identifier, password });
    Cookie.set("token", data.jwt);
    Router.push("/");
    return data;
  } catch(err) {
    return err;
  }
}

export const logout = () => {
  Cookie.remove("token");
  delete window.__user;

  // sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  Router.push("/");
}