---
slug: "js-p-camel-case"
title: "Practice: camelCase"
type: "code"
language: "js"
xp: 15
hints: ["Split on a regex like `/[\\s_-]+/` and drop empty strings."]
---
# Practice: camelCase

Variable names, JSON keys and CSS-in-JS props all use **camelCase**. Converting between naming styles is a common utility.

## Your task
`toCamelCase(text)` converts words separated by spaces, dashes or underscores into camelCase: `"hello world-foo_bar"` → `"helloWorldFooBar"`. The first word is lowercase, and every later word is capitalised (with the rest of the word lowercased). Ignore extra separators.
