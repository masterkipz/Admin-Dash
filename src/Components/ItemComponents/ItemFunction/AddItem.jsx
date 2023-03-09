import { Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { queryCache } from 'react-query';
import { addItem } from "../../../api/itemApi";

const AddItem = () => {
  const [item, setItem] = useState({
    propertyNumber: "",
    assetClassification: "",
    brand: "",
    serialNumber: "",
    aquisitionCost: 0,
    aquisitionDate: "",
    location: "",
    personAccountable: "",
  });

    const handleSubmit = async (event) => {
      event.preventDefault();
        await addItem(item);
        setItem({
          propertyNumber: "",
          assetClassification: "",
          brand: "",
          serialNumber: "",
          aquisitionCost: 0,
          aquisitionDate: "",
          location: "",
          personAccountable: "",
        });
        
        await queryCache.invalidateQueries("item");
    };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <input
          required
          name="propertyNumber"
          value={item.propertyNumber}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "1",
            gridColumn: "1",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Property Number"
        />
        <input
          required
          name="assetClassification"
          value={item.assetClassification}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "2",
            gridColumn: "1",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Asset Classification"
        />
        <input
          required
          name="brand"
          value={item.brand}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "3",
            gridColumn: "1",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Item/Brand/Model"
        />
        <input
          required
          name="serialNumber"
          value={item.serialNumber}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "4",
            gridColumn: "1",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Serial Number"
        />
        <input
          required
          type="number"
          name="aquisitionCost"
          value={item.aquisitionCost}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "1",
            gridColumn: "2",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Aquisition Cost"
        />
        <input
          required
          name="aquisitionDate"
          value={item.aquisitionDate}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "2",
            gridColumn: "2",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Aquisition Date"
        />
        <input
          required
          name="location"
          value={item.location}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "3",
            gridColumn: "2",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Location"
        />
        <input
          required
          name="personAccountable"
          value={item.personAccountable}
          onChange={handleChange}
          style={{
            margin: "10px",
            gridRow: "4",
            gridColumn: "2",
            padding: "8px",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "transparent",
            width: "250px",
            height: "30px",
          }}
          placeholder="Person Accountable"
        />

        <Button
          style={{
            margin: "10px auto",
            borderRadius: "15px",
            gridRow: "5",
            gridColumn: "2",
            width: "100px",
            height: "40px",
            color: "black",
            backgroundColor: "white",
            fontFamily: "Poppins, sans-serif",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Add Item
        </Button>
      </div>
    </form>
  );
};

export default AddItem;
