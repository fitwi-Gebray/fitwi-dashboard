import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar open={open} />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar toggleSidebar={toggleSidebar} />
        <Box sx={{ p: 3, overflowY: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
}
