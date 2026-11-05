---
slug: "sd-q-cache-races"
title: "Cache Consistency Races"
type: "quiz"
xp: 15
questions: [{"prompt": "In cache-aside, what should a write usually do to the cache?", "options": ["Set the new value", "Delete (invalidate) the key after updating the database", "Nothing"], "answer": 1}, {"prompt": "How can a stale value end up in the cache after an update?", "options": ["It cannot", "A slow reader that fetched the old value writes it to the cache after the writer invalidated the key", "Redis corrupts data"], "answer": 1}, {"prompt": "What is the main risk of write-behind caching?", "options": ["It is slow", "Data acknowledged to users can be lost if the cache fails before writing to the database", "It cannot handle reads"], "answer": 1}, {"prompt": "Which data should you avoid caching for decisions?", "options": ["A blog post", "Available stock when confirming a purchase", "A list of countries"], "answer": 1}, {"prompt": "What limits the damage from all these races?", "options": ["A long TTL", "A short TTL as a safety net", "No TTL at all"], "answer": 1}]
---
# Cache Consistency Races

"Update the database, then delete the cache key" is the standard **cache-aside** invalidation. It still has a classic race:

```
1. Reader: cache miss → reads the OLD value from the database
2. Writer: updates the database → deletes the cache key
3. Reader: writes the OLD value into the cache   ← stale until the TTL
```

Mitigations:
- **Short TTLs** limit how long the damage lasts.
- **Delete, don't set**, on writes. Setting the new value from the writer can race with another writer.
- **Delayed double delete**: delete the key, then delete it again a second later.
- **Version or timestamp checks**: only write to the cache if the value is newer than what's there.
- For truly critical data (balances, stock), **don't cache it**, or read from the database for the decision.

Write-through (write to the cache and the database together) and write-behind (write to the cache now, the database later) trade simplicity, latency and durability differently. Write-behind can lose data if the cache dies.
