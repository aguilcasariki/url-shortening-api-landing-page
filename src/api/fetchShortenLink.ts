interface ShortenLinkResponse {
  ok: boolean;
  result?: { short_link: string };
  error?: string;
}

interface ApiResponse {
  short_url?: string;
  error?: string;
  message?: string;
}

const fetchShortenLink = async (
  url: string,
  options: Record<string, string> = {}
): Promise<ShortenLinkResponse> => {
  const apiUrl = "https://spoo.me";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ url, ...options }),
    });

    if (response.ok) {
      const data = (await response.json()) as ApiResponse;
      if (data.short_url) {
        // Adapt the response to the format expected by the UI component
        return { ok: true, result: { short_link: data.short_url } };
      } else {
        return {
          ok: false,
          error: "Invalid response from shortening service.",
        };
      }
    } else if (response.status === 400) {
      await response.json(); // Consume response but ignore it
      console.log("Invalid URL provided by user");
      return {
        ok: false,
        error: "Please enter a valid URL (must start with http:// or https://)",
      };
    } else if (response.status === 429) {
      const errorData = (await response.json()) as ApiResponse;
      console.log(`Rate limit: ${errorData.error || "Too many requests"}`);
      return {
        ok: false,
        error:
          errorData.error || "Rate limit exceeded. Please try again later.",
      };
    } else {
      const errorData = (await response.json()) as ApiResponse;
      console.log(
        `Error: ${errorData.error || errorData.message || "Unknown error"}`
      );
      return {
        ok: false,
        error:
          errorData.message || errorData.error || "An unknown error occurred.",
      };
    }
  } catch (error) {
    console.log(`Request failed: ${(error as Error).message}`);
    return {
      ok: false,
      error: "Failed to connect to the shortening service.",
    };
  }
};

export default fetchShortenLink;
