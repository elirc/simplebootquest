---
slug: "sd-invalidation-stampedes"
title: "Invalidation & Cache Stampedes"
type: "quiz"
xp: 15
questions: [{"prompt": "After updating recipe 42, what is generally safest?", "options": ["Update the cached value in place", "Delete the cached key, so the next read reloads fresh data", "Do nothing and wait for the TTL"], "answer": 1}, {"prompt": "What is a cache stampede?", "options": ["A cache filling up", "Many requests missing the same expired key at once and overloading the database", "Two caches disagreeing"], "answer": 1}, {"prompt": "Which technique prevents a stampede?", "options": ["Longer database timeouts", "Request coalescing, so only one request recomputes while others wait", "Disabling the cache"], "answer": 1}, {"prompt": "Why add random jitter to TTLs?", "options": ["Security", "So keys created together do not all expire at the same moment", "To save memory"], "answer": 1}, {"prompt": "Versioned keys like `list:v17` make invalidation easier because…", "options": ["Bumping the version makes all old keys unreachable at once", "They never expire", "Redis requires them"], "answer": 0}]
---
# Invalidation & Cache Stampedes

### Invalidation

When data changes, remove (or update) every cached copy that includes it. That's harder than it sounds: a recipe also appears in "latest recipes", search results, the author's page…

Strategies:

- **Delete on write**: `redis.del('recipe:42')` after updating. Prefer deleting over updating the cache, which avoids races where an older value overwrites a newer one.
- **Versioned keys**: `recipes:list:v17`. Bump the version to invalidate everything at once.
- **Short TTLs** for things that are hard to track precisely.

### Stampedes (thundering herd)

A popular key expires, and **1,000 requests miss at the same moment**, all of them hitting the database together, which can knock it over. Defences:

- **Request coalescing / locking**: the first miss recomputes, and the others wait for its result. (You built in-flight deduplication in the async chapter!)
- **Stale-while-revalidate**: serve the old value while one background refresh runs.
- **Jittered TTLs**: `300 ± random(30)` seconds, so keys don't all expire together.
