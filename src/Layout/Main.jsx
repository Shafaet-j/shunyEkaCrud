import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-205px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
