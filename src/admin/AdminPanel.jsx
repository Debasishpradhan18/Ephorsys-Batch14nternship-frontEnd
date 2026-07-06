import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f1f5f9",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "25px",
            background: "#f1f5f9",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;