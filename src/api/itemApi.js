import { queryCache } from 'react-query';

const fetchItem = async () => {
  const response = await fetch('http://localhost:3500/items');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const queryKey = 'item';

const refetchItem = async () => {
  await queryCache.invalidateQueries(queryKey);
  await queryCache.prefetchQuery(queryKey, fetchItem);
};

const searchItem = async (searchTerm) => {
  const response = await fetch(`http://localhost:3500/items?search=${searchTerm}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export { fetchItem, refetchItem, searchItem };
