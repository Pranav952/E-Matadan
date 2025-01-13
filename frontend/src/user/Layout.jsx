import React from "react";
import SideBar from "./components/SideBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar/>
      <main className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-10 min-h-screen w-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;
