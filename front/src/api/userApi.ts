import api from "../config/axios";
import {
  type User,
  type LoginForm,
  type RegisterForm,
  type UpdateProfileForm,
} from "../types";
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
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const updateProfile = async (formData: UpdateProfileForm) => {
  try {
    const { data } = await api.patch<User>("/user", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const updateImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const {
      data: { image },
    }: { data: { image: string } } = await api.post("/user/image", formData);
    return image;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
