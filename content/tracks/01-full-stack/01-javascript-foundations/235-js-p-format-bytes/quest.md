---
slug: "js-p-format-bytes"
title: "Practice: Formatting File Sizes"
type: "code"
language: "js"
xp: 15
hints: ["Divide by 1024 while the value is at least 1024."]
---
## Your task
`formatBytes(n)` returns a human-readable size using base 1024: `"512 B"`, `"1.5 KB"`, `"3.2 MB"`, `"1 GB"`. Use one decimal place, but drop a trailing `.0` (`"2 KB"`, not `"2.0 KB"`). Bytes are never shown with decimals.
