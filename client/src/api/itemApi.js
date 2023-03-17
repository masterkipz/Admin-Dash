const fetchItem = async () => {
  const response = await fetch("http://localhost:3500/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const searchItem = async (searchTerm) => {
  const response = await fetch(
    `http://localhost:3500/items?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const addItem = async (item) => {
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

const deleteItem = async (property_num) => {
  const response = await fetch(`http://localhost:3500/items/${property_num}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export { fetchItem, searchItem, addItem, deleteItem };
