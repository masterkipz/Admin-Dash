import React from "react";
import ItemHeaderContainer from "./ItemHeaderContainer";
import ItemContainer from "./ItemContainer";
import { Box } from "@mui/material";

const InventoryTable = () => {
  return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "3px solid",
            borderColor: "transparent",
            borderRadius: 4,
            width: "90%",
            p: 2,
            backgroundImage: "linear-gradient(to bottom, #4c9798, #87bee3)",
          }}
        >
          <ItemContainer />
        </Box>
      </div>
  );
};

export default InventoryTable;
