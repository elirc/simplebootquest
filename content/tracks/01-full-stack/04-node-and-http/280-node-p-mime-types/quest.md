---
slug: "node-p-mime-types"
title: "Practice: Content Types for Static Files"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Take the last path segment first, so dots in directory names are ignored.", "`lastIndexOf(\".\")` returning 0 means a dotfile, and -1 means no extension."]
---
# Practice: Content Types for Static Files

`express.static` sets `Content-Type` from the file extension. Get it wrong and browsers refuse to run your JavaScript (`text/plain` is blocked as a script under `X-Content-Type-Options: nosniff`).

## Your task
Write `contentTypeFor(filename)` using this table (extensions are case-insensitive):

| Ext | Type |
|-----|------|
| html | text/html |
| css | text/css |
| js, mjs | text/javascript |
| json | application/json |
| svg | image/svg+xml |
| png | image/png |
| jpg, jpeg | image/jpeg |
| txt | text/plain |
| woff2 | font/woff2 |

- Types starting with `text/`, plus `application/json`, get `; charset=utf-8` appended.
- Unknown extensions, names without an extension, and dotfiles such as `.env` → `application/octet-stream`.
- `filename` may include a directory path, and directories may contain dots (`/v1.2/readme`).
