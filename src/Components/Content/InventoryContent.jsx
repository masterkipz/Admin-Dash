import React from "react";
import ItemContainer from "../UsableComponents/ItemContainer";
import ItemHeaderContainer from "../UsableComponents/ItemHeaderContainer";

const InventoryContent = () => {
  return (
    <div className="content-container">
      <h1 style={{marginLeft:"20px", color: "#134991"}}>Inventory</h1>
      <ItemHeaderContainer />
      <ItemContainer/>
    </div>
  );
};

export default InventoryContent;
