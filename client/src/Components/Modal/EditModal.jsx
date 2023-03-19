import {
  Container,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import React from "react";

const EditModal = (props) => {
  return (
    <Container>
      <Modal open={props.editModalOpen} onClose={props.handleEditClose}>
        <Paper
          sx={{
            padding: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
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
            EDIT DATA
          </Typography>
          <form
            onSubmit={props.handleEditConfirm}
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
                value={props.item && props.item.asset_classification}
                onChange={props.handleEditChange}
                label="Asset Classification"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="asset_classification"
              />
              <TextField
                value={props.item && props.item.item}
                onChange={props.handleEditChange}
                label="Item Name"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="item"
              />
              <TextField
                value={props.item && props.item.serial_no}
                onChange={props.handleEditChange}
                label="Serial Number"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="serial_no"
              />
              <TextField
                value={props.item && props.item.acquisition_cost}
                onChange={props.handleEditChange}
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
                onChange={props.handleEditChange}
                label="Date Acquired"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="date_acquired"
              />
              <TextField
                value={props.item && props.item.date_counted}
                onChange={props.handleEditChange}
                label="Date Counted"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="date_counted"
              />
              <TextField
                value={props.item && props.item.person_accountable}
                onChange={props.handleEditChange}
                label="Person Accountable"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="person_accountable"
              />
              <TextField
                value={props.item && props.item.location}
                onChange={props.handleEditChange}
                id="outlined-basic"
                label="Location"
                variant="outlined"
                sx={{ margin: "5px" }}
                name="location"
              />
              <Button
                onClick={props.handleEditConfirm}
                variant="contained"
                style={{ backgroundColor: "#0091D5", margin: "5px" }}
              >
                Save
              </Button>
              <Button
                onClick={props.handleEditCancel}
                variant="contained"
                style={{ backgroundColor: "#EA6A47", margin: "5px" }}
              >
                Reset
              </Button>
            </div>
          </form>
        </Paper>
      </Modal>
    </Container>
  );
};

export default EditModal;
