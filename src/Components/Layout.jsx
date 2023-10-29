import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Profile />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-grow p-8">{children}</main>
      </div>
    </div>
  );
}
