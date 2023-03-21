import React from "react";
import { Paper } from "@mui/material";

function Data() {
  return (
    <Paper
      sx={{
        height: "320px",
        width: "100%",
        marginTop: "30px",
        marginBottom: "15px",
        "@media (max-width:600px)": {
          marginTop: "10px",
          marginBottom: "5px",
        },
      }}
    ></Paper>
  );
}

export default Data;
