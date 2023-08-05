const fetchShortenLink = async (url) => {
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(
    url
  )}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export default fetchShortenLink;
