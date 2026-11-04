---
slug: "node-path-utilities"
title: "Paths: join, normalize, extname"
type: "code"
language: "js"
xp: 20
hints: ["Use a stack: push normal segments, and pop on `..`.", "For `extname`, only look at the last path segment."]
resources: [{"title": "Node.js: path", "url": "https://nodejs.org/api/path.html"}]
---
# Paths: join, normalize, extname

Never build file paths with string concatenation. Node's `path` module handles separators, `.` and `..`:

```js
import path from 'node:path';
path.join('/srv', 'uploads', '../images', 'a.png');  // '/srv/images/a.png'
path.extname('photo.tar.gz');                        // '.gz'
path.basename('/a/b/report.pdf');                    // 'report.pdf'
path.dirname('/a/b/report.pdf');                     // '/a/b'
```

Writing a POSIX version yourself shows how `..` resolution works, which matters for the security quest coming up.

## Your task

Implement POSIX-style (forward slash) versions:

1. `normalize(p)`: collapses repeated `/`, removes `.` segments, resolves `..` (it can't go above the root for absolute paths, and leading `..` is kept for relative paths). An empty result becomes `"."`. Keep a leading `/` for absolute paths. No trailing slash (except the root `/`).
2. `join(...parts)` joins with `/` and then normalizes.
3. `extname(p)` returns the extension of the last segment, including the dot (`""` if none, and `""` for dotfiles like `.env`).
