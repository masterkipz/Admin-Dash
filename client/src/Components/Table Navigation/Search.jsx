import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchItem } from "../../api/itemApi";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  //Search Functionality
  const handleSearchInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const data = await searchItem(query);
    props.setSearchResults(data);
    console.log(data);
  };

  const searchPlaceholder = <SearchIcon />;

  return (
    <div>
      <TextField
        value={searchQuery}
        onChange={handleSearchInputChange}
        id="search-input"
        label={searchPlaceholder}
        placeholder="Search Item..."
        variant="outlined"
        size="small"
        sx={{
          maxWidth: "300px",
          marginLeft: "20px",
          marginRight: "30px",
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
          "&  .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F0F0F0",
          },
        }}
      />
    </div>
  );
};

export default Search;
