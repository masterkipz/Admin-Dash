import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

function Side() {
  return (
    <div className="side-container">
      <Box
        sx={{
          height: "95%",
          backgroundImage: "linear-gradient(to bottom, #fdc47f, #fae7d4)",
          borderRadius: "10px",
          marginLeft: "10px",
          marginTop: "10px",
        }}
      >
        My Box Content
      </Box>
    </div>
  );
}

export default Side;
