import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Data2 = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#041C32",
        height: "320px",
        width: "100%",
        marginTop: "30px",
        marginBottom: "15px",
        "@media (max-width:600px)": {
          marginTop: "10px",
          marginBottom: "5px",
        },
        borderRadius: "20px",
      }}
    >
      <Typography
        marginTop="20px"
        textAlign="center"
        variant="h5"
        fontWeight="bold"
        color="#f0f0f0"
      >
        Logs
      </Typography>
      <Box></Box>
    </Paper>
  );
};

export default Data2;
