import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/userApi";
import { toast } from "react-toastify";

function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginUser,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}

export default useLogin;
