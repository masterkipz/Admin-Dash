import { Box, Container, Paper } from "@mui/material";
import React from "react";
import AddItemButton from "./Table Navigation/AddItemButton";
import Search from "./Table Navigation/Search";
import TableInventory from "./TableInventory";
import { useState } from "react";
import HeaderOverview from "./Overview/HeaderOverview";
import Data from "./Overview/Data";
import Data2 from "./Overview/Data2";
import User from "./Overview/User";
import Navbar from "./Navbar";

const Layout = () => {
  const [searchResults, setSearchResults] = useState([]);

  function getTotalSearchResults() {
    return searchResults.length;
  }

  const totalSearchResults = getTotalSearchResults();

  return (
    <>
      <Navbar />
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
          <TableInventory
            searchResults={searchResults}
            totalSearchResults={totalSearchResults}
          />
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
            <HeaderOverview />
            <Data />
            <Data2 />
            <User />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
