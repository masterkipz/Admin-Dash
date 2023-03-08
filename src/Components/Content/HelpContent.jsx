import React, { useState, useEffect } from "react";
import { searchItem } from "../../api/itemApi";

const HelpContent = () => {
  const [searchTerm, setProperSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchItem(searchTerm);
      setSearchResults(results);
    };

    fetchData();
  }, [searchTerm]);

  const handlePropersearchTermChange = (event) => {
    setProperSearchTerm(event.target.value);
  };

  // Filter the searchResults array to only include items that match the search term
  const filteredResults = searchResults.filter((item) =>
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginLeft: "1000px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handlePropersearchTermChange}
      />
      <ul>
        {filteredResults.map((item) => (
          <li key={item.id}>{item.propertyNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default HelpContent;
