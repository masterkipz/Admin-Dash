import { Container } from "@mui/material";
import React from "react";
import TableInventory from "./TableInventory";

const Layout = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <TableInventory />
    </Container>
  );
};

export default Layout;
