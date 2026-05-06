import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/userApi";

function useGetUser() {
  const {
    data: user,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  return { user, isLoading, error, isError };
}

export default useGetUser;
