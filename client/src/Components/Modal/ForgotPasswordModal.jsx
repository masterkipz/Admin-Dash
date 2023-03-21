import React from "react";
import { Modal, Paper, Typography } from "@mui/material";

const ForgotPasswordModal = (props) => {
  return (
    <Modal open={props.openForgotPrompt} onClose={props.handleCloseForgotPrompt}>
      <Paper
        sx={{
          backgroundColor: "#F0F0F0",
          padding: "20px",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
        }}
      >
        <Typography color="#041C32" variant="h6" fontStyle="italic">
          Please Contact Super Admin User at: superadmin@admin.com
        </Typography>
      </Paper>
    </Modal>
  );
};

export default ForgotPasswordModal;
