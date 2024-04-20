import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
