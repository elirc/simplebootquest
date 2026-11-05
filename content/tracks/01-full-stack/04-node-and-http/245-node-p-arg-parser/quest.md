---
slug: "node-p-arg-parser"
title: "Practice: A Command-Line Argument Parser"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Use an index-based `for` loop so you can skip the next word (`i++`) after consuming it as a value.", "Strip the leading dashes with `word.replace(/^--?/, \"\")`."]
resources: [{"title": "Node.js: util.parseArgs", "url": "https://nodejs.org/api/util.html#utilparseargsconfig"}]
---
# Practice: A Command-Line Argument Parser

`process.argv.slice(2)` gives you the raw words a user typed after your script name. Libraries like `commander` and Node's own `util.parseArgs` turn them into structured options.

```
mytool build src --out dist --minify -v --mode=prod -- --not-a-flag
```

## Your task
Write `parseArgs(argv)` returning `{ flags, positional }`:
- `--name=value` sets `flags.name = 'value'`.
- `--name value` sets `flags.name = 'value'` when the next word doesn't start with `-`; otherwise `flags.name = true`.
- `-x` works the same way as `--x` (single letters).
- `--no-name` sets `flags.name = false`.
- `--` on its own ends flag parsing: everything after it is positional.
- Anything else is positional.
