import {
  ButtonBase,
  CardMedia,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import dictLogo from "../Images/DICT-Logo-only.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = (event) => {
    navigate("/");
  };

  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="100%"
      style={{
        zIndex: "10",
        minWidth: "375px",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "80px",
        backgroundColor: "#041C32",
      }}
    >
      <IconButton onClick={handleDrawerToggle} sx={{ borderRadius: 0 }}>
        <MenuIcon fontSize="large" sx={{ color: "#F0F0F0" }} />
      </IconButton>

      <Drawer
        PaperProps={{
          style: {
            backgroundColor: "#041C32",
            width: "240px",
          },
        }}
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          marginTop="40px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              height: "150px",
              width: "150px",
              marginBottom: "20px",
            }}
          >
            <CardMedia component="img" title="Image title" src={dictLogo} />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <ButtonBase
              sx={{
                color: "#F0F0F0",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  textA: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DashboardIcon sx={{ marginRight: "10px", fontSize: "30px" }} />
                Dashboard
              </Typography>
            </ButtonBase>
            <ButtonBase
              sx={{
                color: "#F0F0F0",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <ManageAccountsIcon
                  sx={{ marginRight: "10px", fontSize: "30px" }}
                />
                Manage User
              </Typography>
            </ButtonBase>
            <ButtonBase
              onClick={handleLogout}
              sx={{
                color: "#F0F0F0",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <LogoutIcon sx={{ marginRight: "10px", fontSize: "30px" }} />
                Logout
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Drawer>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#F0F0F0",
              fontSize: "48px",
              fontWeight: "bold",
              "@media (max-width:530px)": {
                fontSize: "30px",
                textAlign: "center",
              },
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Navbar;
