import { Container, Paper } from "@mui/material";
import React from "react";
import AddItemButton from "./Table Navigation/AddItemButton";
import Search from "./Table Navigation/Search";
import TableInventory from "./TableInventory";
import { useState } from "react";

const Layout = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div
      style={{
        marginTop: "90px",
      }}
    >
      <Container maxWidth="lg">
        <div
          style={{
            "@media (maxWidth:600px)": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <div>
            <Paper
              sx={{
                backgroundColor: "#F1F1F1",
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
        </div>
      </Container>
      <div>
        {/* <Paper sx={{ height: "200px", width: "200px" }}>Clifford</Paper> */}
      </div>
    </div>
  );
};

export default Layout;
