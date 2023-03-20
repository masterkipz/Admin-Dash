import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { addItem } from "../../api/itemApi";
import AddModal from "../Modal/AddModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };

  const handleCloseModal = () => {
    setAddModalOpen(false);
  };

  const handleAddItem = async (event) => {
    event.preventDefault();

    const isFormValid = Object.values(item).every((val) => val !== "");
    if (!isFormValid) {
      toast.error("All fields must be filled");
      return;
    }

    try {
      await addItem(item);
      // reset form
      setItem({
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
      // handle success
      // Reload web
      window.location.reload();
      handleCloseModal();
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const handleAddCancel = async (event) => {
    event.preventDefault();
    const form = event.target.form;
    form.reset();
    console.log("Reset");
  };

  const handleAddChange = async (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <AddModal
        handleAddItem={handleAddItem}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleAddChange={handleAddChange}
        handleAddCancel={handleAddCancel}
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
