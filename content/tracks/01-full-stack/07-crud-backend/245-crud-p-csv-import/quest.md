---
slug: "crud-p-csv-import"
title: "Practice: Parsing CSV Imports"
type: "code"
language: "js"
xp: 15
hints: ["Track two states: inside quotes or not. Inside quotes, only `\"` is special (and `\"\"` is an escaped quote).", "Write a function that turns text into an array of string arrays first. Mapping to objects is the easy part."]
resources: [{"title": "RFC 4180: Common Format for CSV Files", "url": "https://www.rfc-editor.org/rfc/rfc4180"}]
---
# Practice: Parsing CSV Imports

The other direction: a user uploads a CSV of contacts. `line.split(',')` breaks the moment a field contains a comma inside quotes. A proper parser walks the text **character by character** and tracks whether it's inside quotes.

## Your task
Write `parseCsv(text)` returning an array of objects keyed by the header row:
- Fields are separated by `,` and rows by `\n` or `\r\n`.
- A field wrapped in `"…"` can contain commas, newlines and `""` (an escaped quote).
- Trailing empty lines are ignored.
- Rows with a different number of fields than the header → throw `Error('Row <n> has <x> fields, expected <y>')`, where `n` is the 1-based data row number.
- Unquoted fields are trimmed. Quoted fields are kept exactly.
