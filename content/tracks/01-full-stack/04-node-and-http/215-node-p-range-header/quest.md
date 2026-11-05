---
slug: "node-p-range-header"
title: "Practice: Range Requests"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["A regex like `/^bytes=(\\\\d*)-(\\\\d*)$/` captures both sides, either of which may be empty.", "Handle the three shapes separately: `a-b`, `a-` and `-n`."]
resources: [{"title": "MDN: HTTP range requests", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests"}]
---
# Practice: Range Requests

Video players and download managers ask for **part** of a file:

```
Range: bytes=0-1023      → the first 1024 bytes
Range: bytes=1024-       → from byte 1024 to the end
Range: bytes=-500        → the LAST 500 bytes
```

The server answers `206 Partial Content`, or `416 Range Not Satisfiable` when the range makes no sense.

## Your task
Write `parseRange(header, size)` returning `{ start, end }` (both inclusive), or `null` when the range is unsatisfiable or malformed. Only single ranges count.
- `end` larger than the file is clamped to `size - 1`.
- A suffix range larger than the file returns the whole file.
- `start >= size`, `start > end`, a units other than `bytes`, or garbage → `null`.
