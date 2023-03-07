import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import HelpIcon from "@mui/icons-material/Help";
import { ListItemIcon } from "@mui/material";
import LogoImage from "../Images/DICT-Logo-only.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const LogoStyle = {
    width: "150px",
    marginBottom: "30px",
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          paddingTop: "20px",
          alignItems: "center",
          background: "linear-gradient(to bottom, #134991, #6C9FEC)",
        },
      }}
    >
      <List>
        <img
          style={LogoStyle}
          className="DICT-Logo"
          src={LogoImage}
          alt="DICT-Logo"
        />
        <Link style={{ textDecoration: "none" }} to="/">
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#E52025",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Home" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/inventory">
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#E52025",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <InventoryIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Inventory" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/help">
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#E52025",
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HelpIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Help" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
