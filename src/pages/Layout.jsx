import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function Layout() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;