import { Hono } from "hono";

type AppEnv = {
  GOOGLE_PLACES_API_KEY: string;
};

const PLACE_ID = "ChIJxZc5i6Ps0lQRiSG6Ah9_znQ";
const CACHE_TTL = 6 * 60 * 60; // 6 hours

const app = new Hono<{ Bindings: AppEnv }>();

app.get("/api/reviews", async (c) => {
  // Try cache first (not available in local dev, so wrap in try/catch)
  try {
    const cache = caches.default;
    const cacheKey = "https://cache.internal/tammysnails-reviews";
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&key=${c.env.GOOGLE_PLACES_API_KEY}&languageCode=en`;
    const res = await fetch(url);
    if (!res.ok) return c.json({ error: "Failed to fetch reviews" }, 500);

    const data = await res.json() as Record<string, unknown>;

    const response = new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${CACHE_TTL}`,
      },
    });

    c.executionCtx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch {
    // Fallback for local dev where cache API may be unavailable
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&key=${c.env.GOOGLE_PLACES_API_KEY}&languageCode=en`;
    const res = await fetch(url);
    if (!res.ok) return c.json({ error: "Failed to fetch reviews" }, 500);
    const data = await res.json();
    return c.json(data);
  }
});

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
