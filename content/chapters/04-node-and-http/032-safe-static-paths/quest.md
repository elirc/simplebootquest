---
slug: "node-path-traversal"
title: "Security: Preventing Path Traversal"
type: "code"
language: "js"
xp: 25
hints: ["Decode first, then normalize, then check that the result starts with `root + \"/\"`.", "Without the trailing slash, `/srv/public-backup` would \"start with\" `/srv/public`!", "`decodeURIComponent` throws on malformed input, so wrap it in try/catch."]
resources: [{"title": "OWASP: Path traversal", "url": "https://owasp.org/www-community/attacks/Path_Traversal"}]
---
# Security: Preventing Path Traversal

A static file server maps URLs to files:

```js
const file = path.join(PUBLIC_DIR, req.url);  // /public + /images/cat.png
```

What if someone requests `/../../etc/passwd`? `path.join` happily resolves it to `/etc/passwd`, outside your public folder. This is **path traversal**, one of the oldest web vulnerabilities, and it's still found in real apps today.

The fix: decode the path, resolve it, then **verify the result is still inside the root**.

```js
const resolved = path.resolve(root, '.' + decodedUrlPath);
if (!resolved.startsWith(root + path.sep)) return 403;
```

Watch out for encoded attacks too: `%2e%2e%2f` decodes to `../`.

## Your task

A `normalize(p)` (POSIX, from the previous quest) is provided in the starter.

1. `resolveSafe(root, urlPath)` URL-decodes the path (an invalid encoding returns `null`), removes the query string, joins it under `root`, and returns the absolute file path, or `null` if it escapes `root`. A path ending in `/` serves `index.html`. Paths containing a NUL byte (`\0`) are rejected.
2. `contentType(file)` returns the MIME type from the extension: `.html` → `text/html; charset=utf-8`, `.css` → `text/css`, `.js` → `text/javascript`, `.json` → `application/json`, `.png` → `image/png`, `.svg` → `image/svg+xml`, and anything else → `application/octet-stream`.
