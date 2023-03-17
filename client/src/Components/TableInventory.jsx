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
  Button,
  Skeleton,
} from "@mui/material";
import React from "react";
import { fetchItem, deleteItem } from "../api/itemApi";
import { useState } from "react";
import dictLogo from "../Images/DICT-Logo-only.png";
import dictLogoWhite from "../Images/DICT-Logo-White.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Preview from "@mui/icons-material/Preview";

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

  const { data: items, isLoading, isError } = useQuery("items", fetchItem);

  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setViewModalOpen(true);
    console.log(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setViewModalOpen(false);
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
    console.log(item);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteItem(selectedItem.property_num);

      setDeleteModalOpen(false);
      setSelectedItem(null);
      window.location.reload();
      console.log("Success");
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleDeleteCancel = async () => {
    setSelectedItem(null);
    setDeleteModalOpen(false);
    console.log("Cancel");
  };

  if (isLoading) {
    return (
      <>
        <Skeleton
          animation="wave"
          variant="rounded"
          height="200px"
          sx={{ bgcolor: "grey.300", margin: "10px" }}
        ></Skeleton>
        <Skeleton
          animation="wave"
          variant="rounded"
          height="100px"
          sx={{ bgcolor: "grey.300", margin: "10px" }}
        ></Skeleton>
        <Skeleton
          animation="wave"
          variant="rounded"
          height="50px"
          sx={{ bgcolor: "grey.300", margin: "10px" }}
        ></Skeleton>
        ;
      </>
    );
  }

  if (isError) {
    return <div>Error</div>; // add React component to handle Error
  }

  return (
    <>
      <Modal open={deleteModalOpen} onClose={handleDeleteCancel}>
        <Paper
          sx={{
            padding: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography>Are you sure you want to delete the item?</Typography>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleDeleteConfirm}>Yes</Button>
            <Button onClick={handleDeleteCancel}>No</Button>
          </Box>
        </Paper>
      </Modal>
      <Modal open={viewModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "auto",
            minWidth: "750px",
            height: "auto",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 3,
            backgroundColor: "#1C4E80",
            "@media (max-width: 600px)": {
              height: "500px",
              width: "300px",
              minWidth: "200px",
            },
          }}
        >
          <Typography
            align="center"
            variant="h4"
            sx={{
              color: "#F1F1F1",
              fontWeight: "800",
              "@media (max-width: 600px)": { fontSize: "24px" },
            }}
          >
            PROPERTY INVENTORY DATA
          </Typography>
          <Box display="flex" justifyContent="space-evenly" marginTop="20px">
            <Box
              sx={{
                height: "150px",
                width: "150px",
                marginBottom: "20px",
                "@media (max-width: 600px)": {
                  display: "none",
                },
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
                  sx={{
                    backgroundColor: "#F1F1F1",
                    "@media (max-width: 600px)": {
                      width: "300px",
                      height: "auto",
                    },
                  }}
                >
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Property Number
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.property_num}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Asset Classification
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.asset_classification}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Item Brand
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.item}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Serial Number
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.serial_no}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Acquisition Cost
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.acquisition_cost}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Date Acquired
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.date_acquired}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Date Counted
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.date_counted}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Person Accountable
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {selectedItem && selectedItem.person_accountable}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Location
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
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
                    "@media (max-width: 600px)": {
                      display: "none",
                    },
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
                    "@media (max-width: 600px)": {
                      display: "none",
                    },
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
                    "@media (max-width: 600px)": {
                      display: "none",
                    },
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
                    "@media (max-width: 600px)": {
                      display: "none",
                    },
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
              {items &&
                items.map((item) => (
                  <TableRow key={item.property_num}>
                    <TableCell
                      align="left"
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#202020",
                        "@media (max-width:600px)": {
                          display: "none",
                        },
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
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#202020",
                        "@media (max-width:600px)": {
                          display: "none",
                        },
                      }}
                    >
                      {item.asset_classification}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#202020",
                        "@media (max-width:600px)": {
                          display: "none",
                        },
                      }}
                    >
                      {item.serial_no}
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#202020",
                        "@media (max-width:600px)": {
                          display: "none",
                        },
                      }}
                    >
                      {item.person_accountable}
                    </TableCell>

                    <TableCell align="center">
                      <button
                        onClick={() => handleViewClick(item)}
                        style={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "#EA6A47",
                          border: "none",
                          color: "#F1F1F1",
                          borderRadius: "5px",
                          padding: "0px ",
                          paddingTop: "3px",
                          cursor: "pointer",
                          marginLeft: "2px",
                          marginRight: "2px",
                        }}
                      >
                        <Preview />
                      </button>
                      <button
                        style={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "#EA6A47",
                          border: "none",
                          color: "#F1F1F1",
                          borderRadius: "5px",
                          padding: "0px ",
                          paddingTop: "3px",
                          cursor: "pointer",
                          marginLeft: "2px",
                          marginRight: "2px",
                        }}
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        style={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "#EA6A47",
                          border: "none",
                          color: "#F1F1F1",
                          borderRadius: "5px",
                          padding: "0px ",
                          paddingTop: "3px",
                          cursor: "pointer",
                          marginLeft: "2px",
                          marginRight: "2px",
                        }}
                      >
                        <Delete />
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
