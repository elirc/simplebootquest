---
slug: "react-p-highlight"
title: "Practice: Highlighting Search Matches"
type: "code"
language: "jsx"
xp: 15
hints: ["`\"a-B-a\".split(/(b)/i)` keeps the captured matches in the array, at odd indexes.", "The escape regex is `/[.*+?^${}()|[\\\\]\\\\\\\\]/g`, and the replacement `\"\\\\\\\\$&\"` inserts a backslash before the match."]
---
# Practice: Highlighting Search Matches

Search results feel faster to scan when the matching text is highlighted. The tricky parts: matching **case-insensitively**, keeping the **original casing** in the output, and not breaking when the user types regex characters like `(` or `.`.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
1. `escapeRegExp(s)` escapes `. * + ? ^ $ { } ( ) | [ ] \\` with a backslash.
2. `<Highlight text query />` renders a `<span>` whose children are plain strings for non-matching parts and `<mark>` elements for every match (case-insensitive). The original text is preserved exactly.
   - An empty or whitespace-only query renders `<span>{text}</span>` without marks.
   - Never use `dangerouslySetInnerHTML`.
