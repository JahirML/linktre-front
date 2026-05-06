import api from "../config/axios";
import { type User, type LoginForm, type RegisterForm } from "../types";
import { isAxiosError } from "axios";

export const registerUser = async (formData: RegisterForm) => {
  try {
    const { data } = await api.post("/auth/register", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const loginUser = async (formData: LoginForm) => {
  try {
    const { data } = await api.post("auth/login", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const getUser = async () => {
  try {
    const { data } = await api.get<User>("/user");
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
