import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";

const User = () => {
  const { userFoundState, userRoleState } = useContext(UserContext);

  const formattedUserState =
    userFoundState.charAt(0).toUpperCase() +
    userFoundState.slice(1).toLowerCase();

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
        {userRoleState === "superadmin" ? (
          <AdminPanelSettingsIcon sx={{ color: "#F0F0F0", fontSize: "42px" }} />
        ) : (
          <AccountCircleIcon sx={{ color: "#F0F0F0", fontSize: "42px" }} />
        )}
        <Typography variant="h6" color="#F0F0F0">
          {formattedUserState}
        </Typography>
      </Box>
    </Paper>
  );
};

export default User;
