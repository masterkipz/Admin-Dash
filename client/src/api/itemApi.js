import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchItem = async () => {
  const response = await fetch("http://localhost:3500/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchItemTotal = async () => {
  const response = await fetch("http://localhost:3500/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.length;
};

const searchItem = async (query = "") => {
  const response = await fetch(`http://localhost:3500/items?q=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  if (query.trim() === "") {
    return data;
  }
  const filteredData = data.filter(
    (item) =>
      item.property_num.toLowerCase().includes(query.toLowerCase()) ||
      item.serial_no.toLowerCase().includes(query.toLowerCase()) ||
      item.asset_classification.toLowerCase().includes(query.toLowerCase()) ||
      item.item.toLowerCase().includes(query.toLowerCase()) ||
      item.date_acquired.toLowerCase().includes(query.toLowerCase()) ||
      item.date_counted.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()) ||
      item.person_accountable.toLowerCase().includes(query.toLowerCase())
  );
  return filteredData;
};

const addItem = async (item) => {
  const propertyNum = item.property_num;

  // Check if the property_num already exists
  const existingItem = await fetchItem(propertyNum);
  if (existingItem) {
    toast.error("Duplicate Property Number");
  }

  const response = await fetch("http://localhost:3500/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const editItem = async (property_num, item) => {
  const response = await fetch(`http://localhost:3500/items/${property_num}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const deleteItem = async (property_num) => {
  const response = await fetch(`http://localhost:3500/items/${property_num}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export { fetchItem, fetchItemTotal, searchItem, addItem, editItem, deleteItem };
