---
slug: "js-promise-combinators"
title: "Promise.all, allSettled, race & any"
type: "code"
language: "js"
xp: 20
hints: ["Destructure the array from `Promise.all`.", "Match results to messages by index after `allSettled`.", "`Promise.any` rejects with an AggregateError. Catch it and throw your own error."]
resources: [{"title": "MDN: Promise", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}]
---
# Promise.all, allSettled, race & any

| Combinator | Resolves when | Rejects when |
|------------|---------------|--------------|
| `Promise.all` | **all** fulfil (an array of values, in order) | **any** rejects (fails fast) |
| `Promise.allSettled` | all settle (array of `{status, value \| reason}`) | never |
| `Promise.race` | the **first** to settle fulfils | the first to settle rejects |
| `Promise.any` | the **first** to fulfil | all reject (`AggregateError`) |

Picking the right one:

- A dashboard that needs all its data → `all`.
- Sending 10 notifications where some may fail → `allSettled`.
- A timeout → `race`.
- Querying 3 mirrors and using whichever answers first → `any`.

## Your task

1. `loadDashboard(api)` loads `api.user()`, `api.stats()` and `api.notifications()` **in parallel** and resolves to `{ user, stats, notifications }`.
2. `sendAll(messages, send)` calls `send(msg)` for each message and resolves to `{ sent: n, failed: [messages that failed] }`.
3. `fastestMirror(urls, fetchFn)` resolves to the result of the first successful `fetchFn(url)`. If every mirror fails, reject with `Error('All mirrors failed')`.
