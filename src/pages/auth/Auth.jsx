import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Auth = () => {
  return (
    <div style={{ backgroundColor: "black" }}>

      <Outlet />
    </div>
  );
};

export default Auth;
