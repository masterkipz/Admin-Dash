import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

  const searchPlaceholder = (<SearchIcon/>)

  return (
    <div>
      <TextField
        id="search-input"
        label={searchPlaceholder}
        placeholder="Search Item..."
        variant="outlined"
        size="small"
        style={{ width: "300px", marginLeft: "20px" }}
      />
    </div>
  );
};

export default Search;
