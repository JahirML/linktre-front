import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./components/Layouts/AuthLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AppLayout from "./components/Layouts/AppLayout";
import LinkTree from "./pages/LinkTree";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Route>
            <Route path="/admin" element={<AppLayout />}>
              <Route index={true} element={<LinkTree />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

      <ToastContainer
        position="top-center"
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  );
}

export default App;
