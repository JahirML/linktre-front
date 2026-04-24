import { Outlet } from "react-router";
import Logo from "../header/Logo";

function AuthLayout() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <div className="max-w-lg mx-auto pt-10 px-5 mb-[3%]">
          <Logo />
        </div>
        <div className="mx-auto w-1/3  text-slate-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
