import { useMutation } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../api/userApi";
import { toast } from "react-toastify";

function useRegister() {
  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { registerUser, isPending };
}

export default useRegister;
