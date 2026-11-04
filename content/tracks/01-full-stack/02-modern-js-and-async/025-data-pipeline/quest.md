---
slug: "js-data-pipeline"
title: "Real-World: Analytics Pipeline"
type: "code"
language: "js"
xp: 25
hints: ["A `Set` of userIds gives unique visitors.", "Track spend per user in a `Map`, then find the max.", "Users who purchased = the size of that spend Map."]
---
# Real-World: Analytics Pipeline

Chaining `filter → map → reduce` turns raw events into dashboard numbers. This is the same kind of data work you'll later do in SQL.

```js
const revenueByDay = events
  .filter((e) => e.type === 'purchase')
  .map((e) => ({ day: e.at.slice(0, 10), amount: e.amount }))
  .reduce((acc, e) => ({ ...acc, [e.day]: (acc[e.day] ?? 0) + e.amount }), {});
```

## Your task

Events look like `{ type: 'view' | 'signup' | 'purchase', userId, at: ISO string, amount? }`.

Implement `summarize(events)`, which returns:

```js
{
  uniqueVisitors: 3,                       // distinct userIds across all events
  signups: 2,
  revenue: 120,                            // sum of purchase amounts
  revenueByDay: { '2026-03-01': 100, '2026-03-02': 20 },
  conversionRate: 0.67,                    // users who purchased / unique visitors, 2 decimals (0 if none)
  topSpender: 'u1',                        // userId with the most purchase revenue (null if none)
}
```
