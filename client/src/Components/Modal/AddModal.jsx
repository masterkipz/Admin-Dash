import { Modal, Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const AddModal = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur = () => {
    setIsFocused(true);
  };
  const handleBlur2 = () => {
    setIsFocused2(true);
  };

  const textColor = isFocused ? "#FFFFFF" : "#041C32";
  const textColor2 = isFocused2 ? "#FFFFFF" : "#041C32";

  return (
    <Modal open={props.addModalOpen} onClose={props.handleCloseModal}>
      <Paper
        sx={{
          backgroundColor: "#041C32",
          padding: "20px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          "@media (max-width:600px)": {},
        }}
      >
        <Typography
          marginBottom="20px"
          fontWeight="600"
          color="#F0F0F0"
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
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.property_num}
              onChange={props.handleAddChange}
              label="Property Number"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="property_num"
            />
            <TextField
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.asset_classification}
              onChange={props.handleAddChange}
              label="Asset Classification"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="asset_classification"
            />
            <TextField
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.item}
              onChange={props.handleAddChange}
              label="Item Name"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="item"
            />
            <TextField
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.serial_no}
              onChange={props.handleAddChange}
              label="Serial Number"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="serial_no"
            />
            <TextField
              type="number"
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.acquisiton_cost}
              onChange={props.handleAddChange}
              label="Acquisition Cost"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
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
              type="date"
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{
                style: { color: textColor },
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              value={props.item && props.item.date_acquired}
              onChange={props.handleAddChange}
              label="Date Acquired"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="date_acquired"
            />
            <TextField
              type="date"
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{
                style: { color: textColor2 },
                onFocus: handleFocus2,
                onBlur: handleBlur2,
              }}
              value={props.item && props.item.date_counted}
              onChange={props.handleAddChange}
              label="Date Counted"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="date_counted"
            />
            <TextField
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.person_accountable}
              onChange={props.handleAddChange}
              label="Person Accountable"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="person_accountable"
            />
            <TextField
              InputLabelProps={{ style: { color: "#F0F0F0" } }}
              InputProps={{ style: { color: "#F0F0F0" } }}
              value={props.item && props.item.location}
              onChange={props.handleAddChange}
              id="outlined-basic"
              label="Location"
              variant="outlined"
              sx={{
                margin: "5px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#3E497A",
                  },
                "&  .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#F0F0F0",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#F0F0F0",
                  },
                },
              }}
              name="location"
            />
            <Button
              type="submit"
              onClick={props.handleAddItem}
              variant="contained"
              style={{
                backgroundColor: "#F0F0F0",
                color: "#041C32",
                margin: "5px",
              }}
            >
              Add Item
            </Button>
            <Button
              onClick={props.handleAddCancel}
              variant="contained"
              style={{ backgroundColor: "#FC2947", margin: "5px" }}
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
