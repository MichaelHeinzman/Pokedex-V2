const fetcher = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};

export default fetcher;
