---
slug: "js-run-length-encoding"
title: "Challenge: Run-Length Encoding"
type: "code"
language: "js"
xp: 15
hints: ["Count how long the current run is with an inner `while`.", "`String.prototype.replace` accepts a function as the replacement."]
---
# Challenge: Run-Length Encoding

Compress runs of repeated characters: `"aaabccdddd"` → `"3ab2c4d"` (a count of 1 is omitted). Simple compression like this is used in fax machines and image formats.

## Your task

1. `encode(text)` → `"aaabccdddd"` becomes `"3ab2c4d"`.
2. `decode(text)` reverses it. Counts can have several digits (`"12a"` = twelve a's).

Encoded input never contains digits as data characters.
