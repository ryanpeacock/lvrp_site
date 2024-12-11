export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  let origin = request.headers.get("Origin");
  const secretHeader = request.headers.get("X-API-Secret");

  // List of allowed origins
  const allowedOrigins = [
    "https://lvrpsite.netlify.app", // Production site
    "http://localhost:4321", // Local development
  ];

  // In development, allow `null` origins.
  if (import.meta.env.MODE === "development") {
    if (!origin) origin = "local";
    allowedOrigins.push("local");
  }

  // Validate Origin
  if (!allowedOrigins.includes(origin || "")) {
    return new Response(
      JSON.stringify({ error: "Forbidden - Invalid Origin" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate Secret Token
  const validSecret = import.meta.env.PUBLIC_API_ACCESS_SECRET || "";
  if (secretHeader !== validSecret) {
    return new Response(
      JSON.stringify({ error: "Unauthorized - Invalid Secret" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Fetch data from the third-party API
    const response = await fetch(
      "https://api.sermonaudio.com/v2/node/sermons?&requireAudio=true&includePublished=true&page=1&lite=true&liteBroadcaster=true&pageSize=4&broadcasterID=lasvegasrpc",
      {
        headers: {
          "X-Api-Key": import.meta.env.PUBLIC_SERMON_AUDIO_SECRET || "", // Access your secret API key securely
        },
      }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch data from SermonAudio" }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();

    // Return the data to the client
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin || "", // Reflect the origin that made the request
        "Access-Control-Allow-Methods": "GET",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: (error as Error).message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
