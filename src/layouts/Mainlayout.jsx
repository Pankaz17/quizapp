import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div className="flex flex-col bg-slate-400 justify-between min-h-screen">
      <NavBar />
      <div className="mt-20 mb-10">
      <Outlet/>
      </div>
      <Footer />
    </div>
  );
}
