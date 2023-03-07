import { queryCache } from 'react-query';

const fetchAssets = async () => {
  const response = await fetch('http://localhost:3500/items');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const queryKey = 'item';

const refetchAssets = async () => {
  await queryCache.invalidateQueries(queryKey);
  await queryCache.prefetchQuery(queryKey, fetchAssets);
};

export { fetchAssets, refetchAssets };
