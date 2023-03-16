const fetchItem = async () => {
  const response = await fetch("http://localhost:3500/properties");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const searchItem = async (searchTerm) => {
  const response = await fetch(
    `http://localhost:3500/properties?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const addItem = async (item) => {
  const response = await fetch("http://localhost:3500/properties", {
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

export { fetchItem, searchItem, addItem };
