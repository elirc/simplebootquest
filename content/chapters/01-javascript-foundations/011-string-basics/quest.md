---
slug: "js-string-basics"
title: "String Basics"
type: "code"
language: "js"
xp: 10
hints: ["Chain methods: `text.trim().toUpperCase()`.", "Split on any whitespace with `.split(/\\s+/)` after trimming."]
resources: [{"title": "MDN: String", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"}]
---
# String Basics

Strings are everywhere in web apps: names, emails, URLs, form input. They come with lots of built-in methods, and **none of them change the original string** (strings are *immutable*). They always return a new one.

```js
const s = '  Hello, World  ';
s.length;              // 16
s.trim();              // 'Hello, World'
s.toUpperCase();       // '  HELLO, WORLD  '
s.includes('World');   // true
s.trim().startsWith('Hello'); // true
'abc'[0];              // 'a'
'abc'.at(-1);          // 'c'  (negative index = from the end)
```

## Your task

1. `shout(text)` returns the text trimmed, uppercased, with `"!"` added to the end.
2. `initials(fullName)` returns the uppercase first letter of the first and last word, e.g. `"ada lovelace"` → `"AL"`. Assume there are at least two words (ignore extra spaces).
3. `lastChar(text)` returns the final character, or `""` for an empty string.
