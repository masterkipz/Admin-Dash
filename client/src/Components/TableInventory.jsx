import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { fetchItem } from "../api/itemApi";
import { useState, useEffect } from "react";
import dictLogo from "../Images/DICT-Logo-only.png";
import dictLogoWhite from "../Images/DICT-Logo-White.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TableInventory = () => {
  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            paddingTop: "5px",
            paddingBottom: "5px",
          },
          body: {
            paddingTop: "5px",
            paddingBottom: "5px",
          },
        },
      },
    },
  });

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItem();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "800px",
            height: "400px",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 3,
            backgroundColor: "#1C4E80",
          }}
        >
          <Typography
            align="center"
            variant="h4"
            sx={{ color: "#F1F1F1", fontWeight: "800" }}
          >
            PROPERTY INVENTORY DATA
          </Typography>
          <Box display="flex">
            <Box
              sx={{
                height: "150px",
                width: "150px",
                marginBottom: "20px",
                marginTop: "20px",
                marginLeft: "40px",
              }}
            >
              <CardMedia component="img" title="Image title" src={dictLogo} />
              <CardMedia
                component="img"
                title="Image title"
                src={dictLogoWhite}
              />
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#F1F1F1",
                }}
              >
                Tampering the data of this inventory is punishable by the law
              </Typography>
            </Box>
            <Box>
              <ThemeProvider theme={theme}>
                <TableContainer
                  component={Paper}
                  sx={{ backgroundColor: "#F1F1F1" }}
                >
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Property Number
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.property_num}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Asset Classification
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.asset_classification}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Item Brand
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.item}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Serial Number
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.serial_no}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Acquisition Cost
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.acquisition_cost}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Date Acquired
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.date_acquired}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Date Counted
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.date_counted}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      Person Accountable
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.person_accountable}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#202020", fontWeight: "600" }}>
                      LOcation
                    </TableCell>
                    <TableCell sx={{ color: "#202020" }}>
                      {selectedItem && selectedItem.location}
                    </TableCell>
                  </TableRow>
                </TableContainer>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Modal>
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
                    width: "17%",
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
                    width: "17%",
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
                    width: "17%",
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
                    width: "17%",
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
                    width: "17%",
                  }}
                  align="left"
                >
                  Person Accountable
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    color: "#202020",
                    width: "17%",
                  }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    align="left"
                    sx={{
                      whiteSpace: "nowrap",
                      color: "#202020",
                    }}
                  >
                    {item.item}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ whiteSpace: "nowrap", color: "#202020" }}
                  >
                    {item.property_num}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ whiteSpace: "nowrap", color: "#202020" }}
                  >
                    {item.asset_classification}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ whiteSpace: "nowrap", color: "#202020" }}
                  >
                    {item.serial_no}
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{ whiteSpace: "nowrap", color: "#202020" }}
                  >
                    {item.person_accountable}
                  </TableCell>

                  <TableCell align="center">
                    <button
                      onClick={() => handleViewClick(item)}
                      style={{
                        backgroundColor: "#EA6A47",
                        border: "none",
                        color: "#F1F1F1",
                        borderRadius: "5px",
                        padding: "5px 15px",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableInventory;
