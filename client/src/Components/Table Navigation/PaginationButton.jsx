import React from "react";
import { Pagination } from "@mui/material";
import { fetchItemTotal } from "../../api/itemApi";
import { useState } from "react";
import { useEffect } from "react";

const PaginationButton = () => {
  const [pageTotal, setPageTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const total = await fetchItemTotal();
      setPageTotal(total);
    }
    fetchData();
  }, []);

  const totalPages = Math.floor(pageTotal / 10);

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <Pagination count={totalPages} />
    </div>
  );
};

export default PaginationButton;
