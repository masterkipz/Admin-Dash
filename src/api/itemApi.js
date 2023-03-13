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

const updateItem = async (propertyNumber, updatedItem) => {
  const response = await fetch(
    `http://localhost:3500/items/${propertyNumber}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const deleteItem = async (propertyNumber) => {
  const response = await fetch(
    `http://localhost:3500/items/${propertyNumber}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export { fetchItem, searchItem, addItem, updateItem, deleteItem };
