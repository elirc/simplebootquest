---
slug: "js-p-text-stats"
title: "Practice: Text Statistics"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Split on `/[.!?]+/` and ignore empty pieces to count sentences."]
---
## Your task
`textStats(text)` returns:

- `words`: the number of words (split on whitespace)
- `sentences`: the number of sentences (runs of text ending in `.`, `!` or `?`; trailing text without punctuation also counts)
- `avgWordLength`: the average word length in letters only, to 1 decimal place (0 for no words)
- `readingMinutes`: minutes to read at 200 words/minute, rounded **up** (minimum 1 if there are any words, otherwise 0)
