import { Container, Paper } from "@mui/material";
import React from "react";
import AddItemButton from "./Table Navigation/AddItemButton";
import PaginationButton from "./Table Navigation/PaginationButton";
import Search from "./Table Navigation/Search";
import TableInventory from "./TableInventory";

const Layout = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        height: "100%",
        marginTop: "90px",
        display: "grid",
        gridTemplateColumns: "7fr 3fr",
        gridTemplateRowss: "5fr 5fr",
      }}
    >
      <div style={{ gridColumn: "1", gridRow: "1/3", padding: "20px" }}>
        <div>
          <Paper
            sx={{
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
      <div style={{ gridColumn: "2", gridRow: "1", padding: "20px" }}>
        <Paper
          sx={{
            maxWidth: "600px",
            width: "100%",
            maxHeight: "400px",
            height: "100%",
          }}
        ></Paper>
      </div>
      <div style={{ gridColumn: "2", gridRow: "2", padding: "20px" }}>
        <Paper
          sx={{
            maxWidth: "600px",
            width: "100%",
            maxHeight: "400px",
            height: "100%",
          }}
        ></Paper>
      </div>
    </Container>
  );
};

export default Layout;
