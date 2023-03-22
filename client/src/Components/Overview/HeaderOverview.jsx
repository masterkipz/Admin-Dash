import React from "react";
import { Paper, Typography } from "@mui/material";

function HeaderOverview() {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "80px",
        backgroundColor: "#041C32",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" color="#F0F0F0" fontWeight="bold">
        Data Overview
      </Typography>
    </Paper>
  );
}

export default HeaderOverview;
