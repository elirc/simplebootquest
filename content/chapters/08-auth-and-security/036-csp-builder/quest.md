---
slug: "auth-csp-builder"
title: "Content Security Policy"
type: "code"
language: "ts"
xp: 20
hints: ["Check for the unsafe source while building the parts.", "In `allowsScript`, fall back with `csp[\"script-src\"] ?? csp[\"default-src\"]`."]
resources: [{"title": "MDN: Content Security Policy", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}, {"title": "CSP Evaluator", "url": "https://csp-evaluator.withgoogle.com/"}]
---
# Content Security Policy

A **Content-Security-Policy** header tells the browser which sources of scripts, styles, images and connections are allowed. Even if an attacker injects a `<script>`, the browser refuses to run it unless the policy allows its source. It's your strongest defence-in-depth against XSS.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; img-src 'self' data:; object-src 'none'; frame-ancestors 'none'
```

This very app sets a CSP with `helmet`. It allows `'unsafe-eval'` **only** because the code runner needs `new Function`, and a comment in `app.ts` says so.

## Your task

1. `buildCsp(directives)` takes `{ 'default-src': ["'self'"], ... }` and returns the header string. Directives appear in insertion order, sources are separated by spaces, directives by `; `, and directives with empty source lists are dropped. Throw `Error('Unsafe source: <src>')` for `'unsafe-inline'` in `script-src`, unless the options argument has `allowUnsafeInline: true`.
2. `parseCsp(header)` returns the directives object.
3. `allowsScript(csp, url, pageOrigin)` returns `true` if a script at `url` may load: check `script-src`, falling back to `default-src`. `'self'` means the page origin, `https:` means any HTTPS URL, and other sources are origin prefixes. `'none'` allows nothing.
