import React from "react";
import { Outlet } from "react-router-dom";
import Announcment from "../components/Announcement/Announcment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <div>
        <Announcment />
        <Navbar />
        <Outlet />
      </div>
      <div className=" mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
