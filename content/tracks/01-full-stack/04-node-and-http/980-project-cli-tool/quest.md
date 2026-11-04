---
slug: "node-project-cli"
title: "Project: A Node CLI Notes Tool"
type: "project"
xp: 80
requirements: ["A Node project with `\"type\": \"module\"` and a `bin` entry, runnable as `notes` after `npm link`", "Commands: add (with optional --tag), list (with optional --tag filter), done <id>, remove <id>, search <text>", "Notes persist in a JSON file in the home directory, created on first use", "Writes are atomic: write to a temp file, then rename", "Unknown commands or bad ids print a helpful message to stderr and exit with code 1", "A `--help` flag that prints usage", "A README with installation and usage examples"]
---
# Project: A Node CLI Notes Tool

Before the HTTP server boss, build a command-line tool. CLIs are a great way to practise Node's built-ins without any browser involved.

```bash
notes add "Buy milk" --tag shopping
notes list --tag shopping
notes done 3
notes remove 3
notes search milk
```

## Getting started

```js
#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';

const DB = path.join(homedir(), '.notes.json');
```

Add `"bin": { "notes": "./index.js" }` to `package.json` and run `npm link` to install it globally on your machine.

## Things to think about

- What happens if the JSON file doesn't exist yet, or is corrupted?
- Write to a temporary file and then `rename` it, so a crash mid-write can't corrupt your data (atomic writes).
- Exit with code `1` and a helpful message on bad input. Scripts that call your CLI depend on exit codes.

Submit your repository URL when you're done.
