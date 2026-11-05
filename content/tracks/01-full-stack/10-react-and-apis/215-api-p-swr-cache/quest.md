---
slug: "api-p-swr-cache"
title: "Practice: Stale-While-Revalidate"
type: "code"
language: "js"
xp: 15
hints: ["Keep two Maps: one for entries `{ data, at }`, and one for in-flight promises.", "Remove the in-flight promise in a `.finally()`, whether it succeeded or not."]
resources: [{"title": "TanStack Query: Important defaults", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults"}]
---
# Practice: Stale-While-Revalidate

TanStack Query and SWR show **cached data instantly** and refetch in the background. Users see something immediately, and it's corrected a moment later if it changed. That strategy is called **stale-while-revalidate**.

## Your task
Write `createCache({ staleMs, now })` returning `get(key, fetcher)`, which resolves `{ data, fromCache }`:
- **No entry**: call `fetcher()`, store the result with the time, and resolve `{ data, fromCache: false }`.
- **Fresh entry** (younger than `staleMs`): resolve the cached data, `fromCache: true`, and don't fetch.
- **Stale entry**: resolve the cached data **immediately** (`fromCache: true`) **and** start a background `fetcher()` that updates the entry when it finishes. If that background fetch fails, keep the old data.
- **Dedupe**: while a fetch for a key is in flight, don't start another one. A concurrent `get` for a missing key waits for the same promise.
- If the initial fetch rejects, `get` rejects and nothing is cached.
