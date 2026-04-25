import api from "../config/axios";
import type { RegisterForm } from "../types";
import { isAxiosError } from "axios";

export const registerUser = async (formData: RegisterForm) => {
  try {
    const { data } = await api.post("/auth/register", formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
