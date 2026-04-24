import type { RegisterForm } from "../types";
import axios, { isAxiosError } from "axios";

export const registerUser = async (formData: RegisterForm) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/auth/register`;
    const { data } = await axios.post(url, formData);
    console.log(data);
    // return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
    }
  }
};
