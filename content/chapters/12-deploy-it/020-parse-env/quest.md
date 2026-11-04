---
slug: deploy-parse-env
title: Parse a .env File
type: code
language: js
xp: 20
hints: ["Handle quoted values before looking for inline comments.", "An inline comment is `#` preceded by whitespace."]
resources: [{"title": "Node.js: --env-file", "url": "https://nodejs.org/api/cli.html#--env-fileconfig"}]
---
# Parse a .env File

In development, config lives in a `.env` file that is **never committed**:

```bash
# Database
DATABASE_URL=postgresql://app:app@localhost:5432/app
JWT_SECRET="a long random string"
PORT=3001
export NODE_ENV=development
GREETING='Hello # not a comment'
```

Node 20.6+ can load it natively (`node --env-file=.env server.js`), and libraries like `dotenv` do the same job. Writing a parser yourself shows you the format's quirks.

## Your task

Implement `parseEnv(text)`, which returns an object of key/value pairs:

- Ignore blank lines and lines starting with `#` (after optional whitespace).
- An optional `export ` prefix is allowed.
- Split on the **first** `=`. Keys are trimmed, and lines without `=` are ignored.
- Unquoted values are trimmed, and an inline comment (` #` preceded by whitespace) ends the value.
- Values wrapped in matching single or double quotes keep everything inside, including `#` and surrounding spaces.
- Inside **double** quotes, `\n` becomes a real newline.
- Later duplicate keys win.

Also implement `toEnvFile(obj)`, which serialises an object back into lines of `KEY=value`, wrapping a value in double quotes if it contains a space, `#` or a newline (encode newlines as `\n`).
