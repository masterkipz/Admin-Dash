import React from "react";
import { Paper, Modal, Typography } from "@mui/material";

const FormInvalid = () => {
  return (
    <Modal>
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
        <Typography>All fields are required</Typography>
      </Paper>
    </Modal>
  );
};

export default FormInvalid;
