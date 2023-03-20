import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import AddItemButton from "./Table Navigation/AddItemButton";
import Search from "./Table Navigation/Search";
import TableInventory from "./TableInventory";
import { useState } from "react";

const Layout = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Container
      maxWidth="100%"
      sx={{
        marginTop: "90px",
        display: "flex",
        "@media (max-width:600px)": {
          flexDirection: "column",
        },
        "@media (max-width:1060px)": {
          flexDirection: "column",
        },
      }}
    >
      <Container maxWidth="xl">
        <div>
          <Paper
            sx={{
              backgroundColor: "#041C32",
              height: "80px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddItemButton />
            <Search setSearchResults={setSearchResults} />
          </Paper>
        </div>
        <TableInventory searchResults={searchResults} />
      </Container>
      <Container maxWidth="xs" sx={{ marginBottom: "10px" }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{ width: "100%", height: "80px", backgroundColor: "#041C32" }}
          >
            <Typography variant="h3" color="white">Data Overview</Typography>
          </Paper>
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
          <Paper
            sx={{
              height: "320px",
              width: "100%",
              marginTop: "15px",
              marginBottom: "30px",
              "@media (max-width:600px)": {
                marginTop: "5px",
                marginBottom: "10px",
              },
            }}
          ></Paper>
          <Paper
            sx={{ width: "100%", height: "80px", backgroundColor: "#041C32" }}
          >
            <Typography color="white">Current User Login</Typography>
          </Paper>
        </Box>
      </Container>
    </Container>
  );
};

export default Layout;
