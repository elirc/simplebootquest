---
slug: "js-string-utilities"
title: "Practical String Utilities"
type: "code"
language: "js"
xp: 15
hints: ["After replacing, strip dashes at the ends with `.replace(/^-+|-+$/g, \"\")`.", "For `formatDuration`, minutes are `Math.floor(seconds / 60)` and seconds are `seconds % 60`."]
resources: [{"title": "MDN: Regular expressions", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"}, {"title": "regex101 (regex playground)", "url": "https://regex101.com/"}]
---
# Practical String Utilities

Every app ends up with a `utils/strings.js`. Here are three you'll really use.

**Slugs** are URL-friendly versions of titles: `"Hello, World!"` → `"hello-world"`. Blogs, products and docs all use them.

```js
'Hello World'.toLowerCase().replace(/[^a-z0-9]+/g, '-'); // 'hello-world'
```

`/[^a-z0-9]+/g` is a **regular expression**: "one or more characters that are *not* a–z or 0–9", and `g` means "every match".

**Capitalising** means uppercasing the first letter of each word.

**Padding** is useful for ids and times: `'7'.padStart(3, '0')` → `'007'`.

## Your task

1. `slugify(title)`: lowercase, replace every run of non-alphanumeric characters with a single `-`, and remove leading/trailing dashes. (`"  Hello, World! 2026 "` → `"hello-world-2026"`)
2. `titleCase(text)`: capitalise the first letter of each word and lowercase the rest (`"hELLO wORLD"` → `"Hello World"`). Words are separated by single spaces.
3. `formatDuration(seconds)` → `"m:ss"` (`75` → `"1:15"`, `5` → `"0:05"`, `600` → `"10:00"`).
