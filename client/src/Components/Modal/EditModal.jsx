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
            EDIT ITEM DATA
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
                color="info"
                id="outlined-basic"
                label="Property Number"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Asset Classification"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Item Name"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Serial Number"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Acquisition Cost"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Date Acquired"
                variant="outlined"
                sx={{ margin: "5px" }}
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
                id="outlined-basic"
                label="Date Counted"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Person Accountable"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Property Number"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                sx={{ margin: "5px" }}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "#0091D5", margin: "5px" }}
              >
                Save
              </Button>
              <Button
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
