---
slug: "sd-cache-patterns"
title: "Caching Patterns"
type: "quiz"
xp: 15
resources: [{"title": "AWS: Caching strategies", "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html"}]
questions: [{"prompt": "In cache-aside, what happens on a cache miss?", "options": ["Return an error", "Load from the database, store it in the cache, then return it", "Wait for the cache to fill"], "answer": 1}, {"prompt": "Why always set a TTL, even with explicit invalidation?", "options": ["TTLs are required by Redis", "It bounds how long stale data can survive if invalidation has a bug", "It saves memory only"], "answer": 1}, {"prompt": "Which data is the best caching candidate?", "options": ["A user's bank balance during checkout", "A popular public recipe page", "A one-time password"], "answer": 1}, {"prompt": "What is the main risk of write-behind caching?", "options": ["Slow reads", "Losing writes if the cache fails before flushing to the database", "Too many database writes"], "answer": 1}, {"prompt": "Caching `/api/me` under a single key `\"me\"` in a shared Redis is…", "options": ["Fine", "A data leak: users would see each other's data, so keys must include the user id", "Faster"], "answer": 1}]
---
# Caching Patterns

**Cache-aside** (lazy loading) is the most common pattern:

```ts
async function getRecipe(id) {
  const cached = await redis.get(`recipe:${id}`);
  if (cached) return JSON.parse(cached);                   // hit
  const recipe = await db.recipe.findUnique({ where: { id } }); // miss
  await redis.set(`recipe:${id}`, JSON.stringify(recipe), 'EX', 300);
  return recipe;
}
```

Other patterns:

- **Write-through**: update the cache whenever you write to the DB. Reads are always warm, but you cache data nobody reads.
- **Write-behind**: write to the cache and flush to the DB later. Fast, but risks data loss. Rarely appropriate for app data.
- **Read-through**: the cache library loads from the DB itself on a miss.

### TTLs are your safety net

Always set an expiry (TTL). Even if your invalidation logic has a bug, stale data then fixes itself within the TTL. Choose it from the business tolerance: product prices, maybe 60 s; a blog post, maybe an hour.

### What to cache

Data that's read often, is expensive to compute, and tolerates slight staleness. **Don't** cache per-user secrets in shared caches without user-scoped keys!
