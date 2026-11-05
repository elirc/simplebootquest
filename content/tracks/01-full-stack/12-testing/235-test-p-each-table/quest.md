---
slug: "test-p-each-table"
title: "Practice: Parsing test.each Tables"
type: "code"
language: "js"
xp: 15
resources: [{"title": "Vitest: test.each", "url": "https://vitest.dev/api/#test-each"}]
---
# Practice: Parsing test.each Tables

Vitest's `test.each` accepts a **tagged template table**, which reads like documentation:

```js
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${2} | ${3} | ${5}
`('$a + $b = $expected', ({ a, b, expected }) => { ... });
```

Here you build a plain-text version and the test-name formatter.

## Your task
1. `parseTable(text)`: the first non-empty line holds the column names, separated by `|`. Each following non-empty line is a row. Trim cells and convert the values: `true`/`false` → booleans, `null` → null, numeric strings → numbers (`'1.5'` → 1.5, `'-2'` → -2), text in `"double quotes"` → the string without the quotes, anything else → the trimmed string. A row with the wrong number of cells → throw `Error('Row <n> has <x> cells, expected <y>')` (1-based data row).
2. `formatName(template, row)` replaces `$key` with `String(row[key])`. Strings are shown in double quotes, like Vitest does. Unknown keys are left as-is.
