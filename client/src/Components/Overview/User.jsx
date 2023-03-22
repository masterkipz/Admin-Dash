import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { UserContext } from "../../store/userContext";
import { useContext } from "react";

const User = () => {

  const userFound = useContext(UserContext)

  return (
    <Paper
      sx={{
        width: "100%",
        height: "80px",
        backgroundColor: "#041C32",
        display: "flex",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          borderColor: "#F0F0F0",
          margin: "10px auto",
          padding: "10px",
        }}
      >
        <AdminPanelSettingsIcon sx={{ color: "#F0F0F0", fontSize: "42px" }} />
        <Typography variant="h6" color="#F0F0F0">
          {userFound}
        </Typography>
      </Box>
    </Paper>
  );
};

export default User;
