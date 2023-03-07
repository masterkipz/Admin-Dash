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
            borderColor: "primary.main",
            borderRadius: 4,
            width: "90%",
            p: 2,
            backgroundColor: "#134991",
          }}
        >
          <ItemHeaderContainer />
          <ItemContainer />
        </Box>
      </div>
  );
};

export default InventoryTable;
