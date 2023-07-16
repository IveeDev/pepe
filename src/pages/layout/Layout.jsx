import React from "react";
import NavBar from "../../components/navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === "/";

  return (
    <>
      {!isSignupPage && <NavBar />}
      <Outlet />
    </>
  );
};

export default Layout;
