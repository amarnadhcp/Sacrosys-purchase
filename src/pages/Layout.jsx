import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import SearchBar from "../component/SearchBar/SearchBar"

function Layout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <Navbar />  
      </div>
      <div className="flex flex-col">
        <SearchBar/>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
