---
slug: "deploy-p-dotenv"
title: "Practice: Parsing .env Files"
type: "code"
language: "js"
xp: 15
hints: ["Only ` #` (a space before the hash) starts an inline comment, so `abc#123` stays intact.", "Check the first character of the value to choose between double-quoted, single-quoted and unquoted parsing."]
resources: [{"title": "dotenv on npm", "url": "https://www.npmjs.com/package/dotenv"}]
---
# Practice: Parsing .env Files

`dotenv` (and Node 20's `--env-file`) read `.env` files into `process.env`. The format has more rules than it looks:

```bash
# comments and blank lines are ignored
PORT=3000
export NODE_ENV=production      # "export" prefixes are allowed
DATABASE_URL="postgres://u:p@host/db?sslmode=require"
GREETING='single quotes are literal: \n stays as-is'
MULTI="line one\nline two"     # \n in double quotes becomes a newline
EMPTY=
```

## Your task
Write `parseEnv(text)` returning a plain object:
- Skip blank lines and lines starting with `#`. An optional `export ` prefix is allowed.
- The key is everything before the first `=`, trimmed. It must match `/^[A-Za-z_][A-Za-z0-9_]*$/`, or the line is skipped.
- Values in **double quotes**: take the content between them, and turn `\n` into a newline and `\"` into `"`.
- Values in **single quotes**: take the content literally.
- Unquoted values: strip an inline comment (` #` and everything after it), then trim.
- Later duplicates override earlier ones.
