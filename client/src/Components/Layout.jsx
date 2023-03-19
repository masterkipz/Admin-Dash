import { Container, Paper } from "@mui/material";
import React from "react";
import AddItemButton from "./Table Navigation/AddItemButton";
import Search from "./Table Navigation/Search";
import TableInventory from "./TableInventory";

const Layout = () => {
  return (
    <Container
      sx={{
        height: "100%",
        marginTop: "90px",
      }}
    >
      <div style={{ padding: "20px" }}>
        <div>
          <Paper
            sx={{
              backgroundColor: "#F1F1F1",
              width: "100%",
              height: "80px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddItemButton />
            <Search />
          </Paper>
        </div>
        <div>
          <TableInventory />
        </div>
      </div>
    </Container>
  );
};

export default Layout;
