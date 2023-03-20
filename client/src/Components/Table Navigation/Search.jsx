import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchItem } from "../../api/itemApi";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  //Search Functionality
  const handleSearchInputChange = async (event) => {
    props.setPageTotal(0)
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
        style={{ maxWidth: "300px", marginLeft: "20px", marginRight: "10px" }}
      />
    </div>
  );
};

export default Search;
