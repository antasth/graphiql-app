export const getData = async (url: string, query: string): Promise<string> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await res.json();
  return JSON.stringify(data, null, 2);
};
