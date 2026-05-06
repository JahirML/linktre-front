import { Navigate } from "react-router";
import useGetUser from "../hooks/useGetUser";
import AppLayout from "./Layouts/AppLayout";

export default function ProtectedRoute() {
  const { user, isLoading, isError } = useGetUser();

  if (isError) {
    return <Navigate to={"/auth/login"} />;
  }
  if (!user) return null;
  return <AppLayout user={user} isLoading={isLoading} />;
}
