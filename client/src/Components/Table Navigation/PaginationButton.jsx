import React from "react";
import { Pagination } from "@mui/material";

const PaginationButton = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Pagination count={10} shape="rounded" />
    </div>
  );
};

export default PaginationButton;
