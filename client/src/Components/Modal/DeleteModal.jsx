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
            backgroundColor: "#041C32",
            padding: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography color="#F0F0F0">
            Are you sure you want to delete the item?
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              sx={{ color: "#FC2947", border: "1px solid", marginTop:"5px", marginRight:"5px" }}
              onClick={props.handleDeleteConfirm}
            >
              Yes
            </Button>
            <Button
              sx={{ color: "#F0F0F0", border: "1px solid", marginTop:"5px", marginLeft:"5px" }}
              onClick={props.handleDeleteCancel}
            >
              No
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
}

export default DeleteModal;
