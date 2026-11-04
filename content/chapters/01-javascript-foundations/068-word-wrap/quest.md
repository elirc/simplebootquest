---
slug: "js-word-wrap"
title: "Challenge: Word Wrap"
type: "code"
language: "js"
xp: 20
hints: ["Keep a `line` string; check whether `line + \" \" + word` still fits.", "Remember to push the final line after the loop."]
---
# Challenge: Word Wrap

Terminal output, emails and PDFs all need text wrapped to a maximum line width. The greedy algorithm: add words to the current line until the next one wouldn't fit, then start a new line.

## Your task

`wrap(text, width)` returns an **array of lines**:

- Words are separated by whitespace (collapse extra spaces).
- A line never exceeds `width` characters, **unless** a single word is longer than `width`. Then that word goes on its own line, unbroken.
- An empty or whitespace-only text returns `[]`.
