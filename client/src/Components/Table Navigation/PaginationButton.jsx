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

  const handlePageChange = (event, value) => {
    props.setCurrentPage(value);
  };

  let totalPage = 0;

  if (props.totalSearches === 0) {
    totalPage = Math.ceil(pageTotal / 10);
  } else {
    totalPage = Math.ceil(props.totalSearches / 10);
  }

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <Pagination
        count={totalPage}
        page={props.currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationButton;
