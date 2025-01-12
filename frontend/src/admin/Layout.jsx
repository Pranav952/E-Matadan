import React from "react";
import SideBar from "./components/SideBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar/>
      <main className="flex-1 bg-gray-100 p-8 md:ml-64 transition-all">
        {children}
      </main>
    </div>
  );
}

export default Layout;
