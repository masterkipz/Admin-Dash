import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { addItem } from "../../api/itemApi";
import AddModal from "../Modal/AddModal";

const AddItemButton = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    setAddModalOpen(true);
    console.log(addModalOpen);
  };

  const handleCloseModal = () => {
    setAddModalOpen(false);
  };

  const handleAddItem = async () => {
    try {
      await addItem({item});
      console.log("Item Added");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <div>
      <AddModal
      handleAddItem={handleAddItem}
      handleAddChange={handleAddChange}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        addModalOpen={addModalOpen}
      />
      <ButtonBase
        onClick={handleOpenModal}
        sx={{
          height: "40px",
          width: "80px",
          backgroundColor: "#EA6A47",
          padding: "4px",
          borderRadius: "5px",
          marginLeft: "30px",
        }}
      >
        <Typography sx={{ color: "#F1F1F1" }}>Add Item</Typography>
      </ButtonBase>
    </div>
  );
};

export default AddItemButton;
