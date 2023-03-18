import React from "react";
import { TextField } from "@mui/material";

const Search = () => {
  return (
    <div>
      <TextField
        id="search-input"
        label="Search Item..."
        variant="outlined"
        size="small"
        style={{ width: "300px", marginLeft: "20px" }}
      />
    </div>
  );
};

export default Search;
