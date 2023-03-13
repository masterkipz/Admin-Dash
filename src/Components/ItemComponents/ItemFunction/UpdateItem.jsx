import { Button } from "@mui/material";
import React, { useState } from "react";

const UpdateItem = () => {
  
  return (
    <form>
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
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default UpdateItem;
