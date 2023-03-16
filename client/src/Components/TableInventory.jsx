import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { fetchItem } from "../api/itemApi";
import { useState, useEffect } from "react";

const TableInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItem();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <Paper
      sx={{ borderRadius: "10", padding: "20px", backgroundColor: "#F1F1F1" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: "#202020",
                  width: "20%",
                  textOverflow: "ellipsis",
                }}
                align="left"
              >
                Item Brand
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: "#202020",
                  width: "20%",
                }}
                align="left"
              >
                Property Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: "#202020",
                  width: "20%",
                }}
                align="left"
              >
                Asset Classification
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: "#202020",
                  width: "20%",
                }}
                align="left"
              >
                Serial Number
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: "#202020",
                  width: "20%",
                }}
                align="left"
              >
                Person Accountable
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#202020",
                  }}
                >
                  {item.brand}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ whiteSpace: "nowrap", color: "#202020" }}
                >
                  {item.propertyNumber}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ whiteSpace: "nowrap", color: "#202020" }}
                >
                  {item.assetClassification}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ whiteSpace: "nowrap", color: "#202020" }}
                >
                  {item.serialNumber}
                </TableCell>

                <TableCell
                  align="left"
                  sx={{ whiteSpace: "nowrap", color: "#202020" }}
                >
                  {item.personAccountable}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableInventory;
