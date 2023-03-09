import { queryCache } from "react-query";

const fetchItem = async () => {
  const response = await fetch("http://localhost:3500/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const queryKey = "item";

const refetchItem = async () => {
  await queryCache.invalidateQueries(queryKey);
  await queryCache.prefetchQuery(queryKey, fetchItem);
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
  await queryCache.invalidateQueries(queryKey);
  await queryCache.prefetchQuery(queryKey, fetchItem);
};

export { fetchItem, refetchItem, searchItem, addItem };
