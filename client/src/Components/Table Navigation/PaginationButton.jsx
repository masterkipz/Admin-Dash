import React from "react";
import { Pagination } from "@mui/material";
import { fetchItemTotal } from "../../api/itemApi";
import { useState } from "react";
import { useEffect } from "react";

const PaginationButton = (props) => {
  const [pageTotal, setPageTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const total = await fetchItemTotal();
      setPageTotal(total);
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(pageTotal / 10);

  const handlePageChange = (event, value) => {
      props.setCurrentPage(value);
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <Pagination count={totalPages} page={props.currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default PaginationButton;
