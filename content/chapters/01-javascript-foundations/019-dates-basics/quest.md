---
slug: "js-dates-basics"
title: "Working with Dates"
type: "code"
language: "js"
xp: 15
hints: ["Convert both dates to milliseconds with `.getTime()` and divide by the number of ms in a day.", "`setUTCDate` handles month overflow for you.", "`getUTCDay()` returns 0 for Sunday and 6 for Saturday."]
resources: [{"title": "MDN: Date", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"}, {"title": "Temporal (the future of dates in JS)", "url": "https://tc39.es/proposal-temporal/docs/"}]
---
# Working with Dates

Dates appear in every CRUD app (`createdAt`, `dueDate`). JavaScript's `Date` is famously awkward, so learn the safe subset:

```js
const d = new Date('2026-03-05T10:30:00Z'); // ISO 8601 string: always include a timezone
d.toISOString();          // '2026-03-05T10:30:00.000Z'  ← store and send dates like this
d.getTime();              // ms since 1970-01-01 UTC (great for comparisons and maths)
d.getUTCFullYear();       // 2026
d.getUTCMonth();          // 2   ⚠️ months are 0-based (0 = January)!
d.getUTCDate();           // 5   (day of month)
d.getUTCDay();            // 4   (day of week, 0 = Sunday)
```

**Rules that save you pain:** store dates in UTC, send them as ISO strings, and only convert to local time when displaying.

## Your task

1. `daysBetween(isoA, isoB)` returns the whole number of days from `isoA` to `isoB` (negative if B is earlier). Both are `"YYYY-MM-DD"` strings.
2. `addDays(iso, days)` returns a new `"YYYY-MM-DD"` string.
3. `isWeekend(iso)` returns `true` for Saturdays and Sundays.

Hint: `new Date('2026-03-05T00:00:00Z')` creates midnight UTC, which avoids local-timezone surprises.
