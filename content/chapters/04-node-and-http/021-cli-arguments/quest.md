---
slug: "node-cli-arguments"
title: "Parsing CLI Arguments"
type: "code"
language: "js"
xp: 20
hints: ["Use an index-based `for` loop so you can consume the next argument with `i++`.", "Check `--` first, then `--long`, then `-short`."]
resources: [{"title": "Node.js: util.parseArgs", "url": "https://nodejs.org/api/util.html#utilparseargsconfig"}]
---
# Parsing CLI Arguments

Node scripts receive their command-line arguments in `process.argv`:

```bash
node notes.js add "Buy milk" --tag shopping --urgent -v
```

```js
process.argv; // ['/usr/bin/node', '/path/notes.js', 'add', 'Buy milk', '--tag', 'shopping', '--urgent', '-v']
const args = process.argv.slice(2);   // drop node and the script path
```

Node 18.3+ ships `util.parseArgs`, and libraries like `commander` exist too, but parsing flags yourself is a great exercise.

## Your task

`parseArgs(args)` returns `{ positional: [], flags: {} }`:

- `--name value` → `flags.name = 'value'`
- `--name=value` → `flags.name = 'value'`
- `--flag`, followed by another flag or the end → `flags.flag = true`
- `-abc` (short flags) → `a`, `b` and `c` are each `true`
- `--` stops flag parsing: everything after it is positional
- Everything else is positional.
