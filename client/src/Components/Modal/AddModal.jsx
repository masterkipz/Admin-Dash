import { Modal, Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";

const AddModal = (props) => {
  return (
    <Modal open={props.addModalOpen} onClose={props.handleCloseModal}>
      <Paper
        sx={{
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "35%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
        }}
      >
        <Typography
          marginBottom="20px"
          fontWeight="600"
          color="#202020"
          variant="h4"
          align="center"
        >
          ADD ITEM
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "2rem",
            }}
          >
            <TextField
              label="Property Number"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="property_num"
            />
            <TextField
              label="Asset Classification"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="asset_classification"
            />
            <TextField
              label="Item Name"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="item"
            />
            <TextField
              label="Serial Number"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="serial_no"
            />
            <TextField
              label="Acquisition Cost"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="acquisition_cost"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "2rem",
            }}
          >
            <TextField
              label="Date Acquired"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="date_acquired"
            />
            <TextField
              label="Date Counted"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="date_counted"
            />
            <TextField
              label="Person Accountable"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="person_accountable"
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="location"
            />
            <Button
              onClick={props.handleAddItem}
              variant="contained"
              style={{ backgroundColor: "#0091D5", margin: "5px" }}
            >
              Add Item
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#EA6A47", margin: "5px" }}
            >
              Reset Field
            </Button>
          </div>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddModal;
