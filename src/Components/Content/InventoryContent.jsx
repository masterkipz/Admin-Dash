import React from "react";
import InventoryTable from "../ItemComponents/InventoryTable";

const InventoryContent = () => {
  return (
    <div className="content-container">
      <h1 style={{marginLeft:"20px", color: "#134991"}}>Inventory</h1>
      <InventoryTable />
    </div>
  );
};

export default InventoryContent;
