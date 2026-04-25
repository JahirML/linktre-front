import { useMutation } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../api/userApi";
import toast from "react-hot-toast";

function useRegister() {
  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });

  return { registerUser, isPending };
}

export default useRegister;
