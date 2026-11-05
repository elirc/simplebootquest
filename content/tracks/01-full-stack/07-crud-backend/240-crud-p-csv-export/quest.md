---
slug: "crud-p-csv-export"
title: "Practice: Exporting CSV Safely"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Write a `cell(value)` helper and use it for headers and values alike."]
resources: [{"title": "OWASP: CSV Injection", "url": "https://owasp.org/www-community/attacks/CSV_Injection"}]
---
# Practice: Exporting CSV Safely

"Can I export this to Excel?" Every CRUD app gets asked. CSV looks trivial, but it has two traps:

1. **Escaping**: a value containing a comma, a quote or a newline must be wrapped in double quotes, with inner quotes doubled: `She said "hi"` becomes `"She said ""hi"""`.
2. **CSV injection**: a cell that starts with `=`, `+`, `-` or `@` is run as a **formula** by spreadsheet apps. `=HYPERLINK("http://evil...")` in a user's name becomes a phishing link in your admin's spreadsheet. Prefix such values with a `'`.

## Your task
Write `toCsv(rows, columns)`, where `columns` is an array of `{ key, header }`:
- The first line holds the headers, then one line per row. Join lines with `\r\n` (the CSV standard).
- `null` and `undefined` become empty cells. `Date`s become `toISOString()`. Everything else becomes `String(value)`.
- Neutralise formulas first (prefix `'`), then quote the value if it contains `,`, `"`, `\r` or `\n`.
- Headers get the same escaping.
