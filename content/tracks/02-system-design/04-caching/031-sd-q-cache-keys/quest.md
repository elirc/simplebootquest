---
slug: "sd-q-cache-keys"
title: "Cache Keys and TTLs"
type: "quiz"
xp: 15
questions: [{"prompt": "A cached /api/me response is keyed only by path. What can go wrong?", "options": ["Nothing", "Users can receive another user's profile", "The cache is too small"], "answer": 1}, {"prompt": "Why add random jitter to TTLs?", "options": ["To make caching harder", "So many keys do not expire at the same moment and stampede the database", "It is required by Redis"], "answer": 1}, {"prompt": "What is negative caching?", "options": ["Caching errors forever", "Briefly caching \"not found\" results so repeated lookups of missing items do not hit the database", "Deleting the cache"], "answer": 1}, {"prompt": "Why include a version prefix like v3: in keys?", "options": ["Readability", "Changing the version safely invalidates every old-format entry at once", "Redis requires it"], "answer": 1}, {"prompt": "If you invalidate explicitly on writes, should you still set a TTL?", "options": ["No", "Yes: it limits how long a missed invalidation can serve stale data"], "answer": 1}]
---
# Cache Keys and TTLs

A cache is only as good as its **keys**. Get them wrong and users see each other's data, or the cache never hits.

- **Include everything the response depends on**: `recipes:list:user:42:page:2:sort:newest`. Leave out the user id, and user 43 sees user 42's list.
- **Version your keys**: `v3:recipe:17`. Bumping the version after a schema change invalidates everything at once, safely.
- **Normalise inputs**: `?sort=new&page=2` and `?page=2&sort=new` should map to the same key.
- **TTL is a safety net**, not the main invalidation strategy. Even with explicit invalidation, set a TTL so a missed invalidation heals itself.
- **Add jitter to TTLs** (for example 300 s ± 10%), so thousands of keys written at the same moment don't all expire together.
- **Negative caching**: cache "not found" briefly too, or a flood of requests for missing ids goes straight to the database.
