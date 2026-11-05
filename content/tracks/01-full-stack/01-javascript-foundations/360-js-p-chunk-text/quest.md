---
slug: "js-p-chunk-text"
title: "Practice: Splitting Messages"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Reserve room for the prefix (\"(1/3) \" is 6 characters), then wrap greedily."]
---
# Practice: Splitting Messages

SMS and some chat APIs limit message length, so long texts must be split into numbered parts like `"(1/3) ..."`.

## Your task
`splitMessage(text, limit)` splits text into parts of at most `limit` characters **including** a `"(i/n) "` prefix. It splits on spaces (never inside a word), and assumes no single word is too long. If the text fits in `limit` characters, return it unchanged as a single part (no prefix). Assume fewer than 10 parts.
