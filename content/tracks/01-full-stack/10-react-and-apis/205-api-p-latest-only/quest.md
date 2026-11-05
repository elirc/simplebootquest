---
slug: "api-p-latest-only"
title: "Practice: Ignoring Stale Responses"
type: "code"
language: "js"
xp: 15
hints: ["Give each call an increasing id. When it finishes, compare its id with the current one."]
resources: [{"title": "React docs: Fetching data with Effects (race conditions)", "url": "https://react.dev/learn/synchronizing-with-effects#fetching-data"}]
---
# Practice: Ignoring Stale Responses

Type "re", then "rea", then "react" in a search box: three requests fly off. If the response for "re" arrives **last**, the UI shows the wrong results. This is a **race condition**, and it's extremely common.

Fixes: abort old requests with `AbortController`, or ignore any response that isn't from the latest request. In `useEffect` this is the `let ignore = false; return () => { ignore = true }` pattern.

## Your task
Write `createLatest()` returning `run(asyncFn)`:
- `run` calls `asyncFn(signal)` with an `AbortSignal` from a new `AbortController`, and **aborts the previous call's controller**.
- It resolves `{ stale: false, value }` when this call is still the latest when it finishes, or `{ stale: true }` when a newer call has started since.
- If `asyncFn` rejects: rethrow if it's still the latest, otherwise resolve `{ stale: true }` (an error from an outdated request doesn't matter).
