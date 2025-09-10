const fetchShortenLink = async (url) => {
  const apiUrl = "/api/v1/shorten";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(url)}`,
    });

    const data = await response.json();

    if (response.ok && data.result_url) {
      // Adapt the response to the format expected by the UI component
      return { ok: true, result: { short_link: data.result_url } };
    } else {
      // Adapt the error response
      return { ok: false, error: data.error || "An unknown error occurred." };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      ok: false,
      error: "Failed to connect to the shortening service.",
    };
  }
};

export default fetchShortenLink;
