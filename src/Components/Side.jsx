import {
  Box,
  ListItem,
  Stack,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import LogoImage from "../Images/DICT-Logo-only.png";

function Side() {
  return (
    <div className="side-container">
      <Box
        sx={{
          height: "97%",
          backgroundImage: "linear-gradient(to bottom, #4c9798, #87bee3)",
          borderRadius: "10px",
          marginLeft: "10px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Avatar
            style={{ margin: "0 auto" }}
            sx={{
              marginTop: "10px",
              width: "80px",
              height: "80px",
            }}
            alt="Remy Sharp"
            src={LogoImage}
          />
          <ListItemText sx={{ marginTop: "10px" }}>Admin User</ListItemText>
        </div>

        <Stack spacing={2}>
          <Link style={{ textDecoration: "none" }} to="/">
            <ListItem
              style={{ marginTop: "10px", paddingLeft: "30px" }}
              sx={{
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to left, #fdc47f , #e05a00)",
                },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <HomeIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }} primary="Home" />
            </ListItem>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/inventory">
            <ListItem
              style={{ paddingLeft: "30px" }}
              sx={{
                "&:hover": {
                  backgroundImage: "linear-gradient(to left, #fdc47f, #e05a00)",
                },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <InventoryIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }} primary="Inventory" />
            </ListItem>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/help">
            <ListItem
              style={{ paddingLeft: "30px" }}
              sx={{
                "&:hover": {
                  backgroundImage: "linear-gradient(to left, #fdc47f, #e05a00)",
                },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <HelpIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }} primary="Help" />
            </ListItem>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Side;
