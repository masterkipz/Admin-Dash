import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Skeleton,
  Box,
} from "@mui/material";
import React from "react";
import { fetchItem, deleteItem, editItem } from "../api/itemApi";
import { useState } from "react";
import { useQuery } from "react-query";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Preview from "@mui/icons-material/Preview";
import EditModal from "./Modal/EditModal";
import DeleteModal from "./Modal/DeleteModal";
import ViewModal from "./Modal/ViewModal";
import PaginationButton from "./Table Navigation/PaginationButton";

const TableInventory = () => {
  const { data: items, isLoading, isError } = useQuery("items", fetchItem);

  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [item, setItem] = useState({
    property_num: "",
    asset_classification: "",
    item: "",
    serial_no: "",
    acquisition_cost: "",
    date_acquired: "",
    date_counted: "",
    person_accountable: "",
    location: "",
  });

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

  const handleEditClick = (item) => {
    setItem(item);
    setEditModalOpen(true);
    console.log(item);
  };

  const handleEditClose = () => {
    setItem(null);
    setEditModalOpen(false);
  };

  const handleEditConfirm = async (event) => {
    event.preventDefault();

    try {
      await editItem(item.property_num, item);
      setItem(null);
      setEditModalOpen(false);
      window.location.reload();
      console.log("Item updated successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEditCancel = async (event) => {
    event.preventDefault();
    const form = event.target.form;
    form.reset();
    console.log("Reset");
  };

  const handleEditChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
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
      {/* Edit Modal */}
      <EditModal
        editModalOpen={editModalOpen}
        handleEditClose={handleEditClose}
        handleEditConfirm={handleEditConfirm}
        handleEditCancel={handleEditCancel}
        handleEditChange={handleEditChange}
      />
      {/* Delete Modal */}
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        handleDeleteClick={handleDeleteClick}
        handleDeleteConfirm={handleDeleteConfirm}
        handleDeleteCancel={handleDeleteCancel}
      />
      {/* View Modal */}
      <ViewModal
        viewModalOpen={viewModalOpen}
        handleCloseModal={handleCloseModal}
        selectedItem={selectedItem}
      />

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
                  Item Brand
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
                items.slice(0, 10).map((item) => (
                  <TableRow key={item.property_num}>
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
                      {item.item}
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
                        onClick={() => handleEditClick(item)}
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
            <Box>
              <PaginationButton />
            </Box>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableInventory;
