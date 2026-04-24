import { Outlet } from "react-router";
import Header from "../header/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
