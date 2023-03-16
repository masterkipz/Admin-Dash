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

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
    console.log(isDrawerOpen);
  };

  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth=""
      style={{
        maxWidth: "100vw",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "80px",
        backgroundColor: "#1C4E80",
      }}
    >
      <IconButton onClick={handleDrawerToggle} sx={{ borderRadius: 0 }}>
        <MenuIcon fontSize="large" sx={{ color: "#F1F1F1" }} />
      </IconButton>

      <Drawer
        PaperProps={{
          style: {
            backgroundColor: "#1C4E80",
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
                color: "#F1F1F1",
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
                color: "#F1F1F1",
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
              sx={{
                color: "#F1F1F1",
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
              color: "#F1F1F1",
              fontSize: "48px",
              "@media (max-width:530px)": {
                fontSize:"30px"
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
