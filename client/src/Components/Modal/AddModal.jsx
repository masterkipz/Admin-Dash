import { Modal, Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";

const AddModal = (props) => {
  return (
    <Modal open={props.addModalOpen} onClose={props.handleCloseModal}>
      <Paper
        sx={{
          backgroundColor: "#F1F1F1",
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          "@media (max-width:600px)":{
          }
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
          onSubmit={props.handleAddItem}
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
              value={props.item && props.item.property_num}
              onChange={props.handleAddChange}
              label="Property Number"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="property_num"
            />
            <TextField
              value={props.item && props.item.asset_classification}
              onChange={props.handleAddChange}
              label="Asset Classification"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="asset_classification"
            />
            <TextField
              value={props.item && props.item.item}
              onChange={props.handleAddChange}
              label="Item Name"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="item"
            />
            <TextField
              value={props.item && props.item.serial_no}
              onChange={props.handleAddChange}
              label="Serial Number"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="serial_no"
            />
            <TextField
              value={props.item && props.item.acquisiton_cost}
              onChange={props.handleAddChange}
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
              value={props.item && props.item.date_acquired}
              onChange={props.handleAddChange}
              label="Date Acquired"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="date_acquired"
            />
            <TextField
              value={props.item && props.item.date_counted}
              onChange={props.handleAddChange}
              label="Date Counted"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="date_counted"
            />
            <TextField
              value={props.item && props.item.person_accountable}
              onChange={props.handleAddChange}
              label="Person Accountable"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="person_accountable"
            />
            <TextField
              value={props.item && props.item.location}
              onChange={props.handleAddChange}
              id="outlined-basic"
              label="Location"
              variant="outlined"
              sx={{ margin: "5px" }}
              name="location"
            />
            <Button
              type="submit"
              onClick={props.handleAddItem}
              variant="contained"
              style={{ backgroundColor: "#0091D5", margin: "5px" }}
            >
              Add Item
            </Button>
            <Button
              onClick={props.handleAddCancel}
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
