import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const InventoryContent = () => {
  const tableHeadStyle = {
    fontWeight: "bold",
  };

  return (
    <div className="content-container">
      <h1 style={{ marginLeft: "20px", color: "#134991" }}>Inventory</h1>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell style={tableHeadStyle}>Product Name</TableCell>
            <TableCell style={tableHeadStyle}>ID</TableCell>
            <TableCell style={tableHeadStyle}>Serial Number</TableCell>
            <TableCell style={tableHeadStyle}>Product Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Desktop AMD Proci</TableCell>
            <TableCell>01</TableCell>
            <TableCell>123456789</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default InventoryContent;
