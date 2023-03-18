import {
  Container,
  Paper,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

function DeleteModal(props) {
  return (
    <Container>
      <Modal open={props.deleteModalOpen} onClose={props.handleDeleteCancel}>
        <Paper
          sx={{
            padding: "20px",
            position: "absolute",
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography>Are you sure you want to delete the item?</Typography>
          <Box display="flex" justifyContent="center">
            <Button onClick={props.handleDeleteConfirm}>Yes</Button>
            <Button onClick={props.handleDeleteCancel}>No</Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
}

export default DeleteModal;
