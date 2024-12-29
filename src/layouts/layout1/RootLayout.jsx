import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/navbar1/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center bg-slate-100"> 
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
