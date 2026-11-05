---
slug: "auth-p-safe-redirect"
title: "Practice: Preventing Open Redirects"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["An allow-list check (\"starts with one `/`, then not `/` or `\\\\`\") is much safer than trying to block every bad pattern."]
resources: [{"title": "OWASP: Unvalidated Redirects and Forwards", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html"}]
---
# Practice: Preventing Open Redirects

After login you redirect to `?next=/settings`. If you redirect to **any** `next`, an attacker sends victims to

```
https://yourapp.com/login?next=https://evil.com/fake-login
```

The link looks legitimate because it's your domain, and after logging in the victim lands on a phishing page. This is an **open redirect**.

## Your task
Write `safeRedirect(next, fallback = '/')` returning `next` only if it's a safe **same-site relative path**, otherwise `fallback`:
- Must be a string starting with exactly one `/`.
- Reject protocol-relative URLs (`//evil.com`) and backslash tricks (`/\\evil.com`, `\\evil.com`), since browsers treat `\\` like `/`.
- Reject anything containing ASCII control characters (code < 32, such as tabs and newlines), which browsers strip.
- Reject anything with a scheme anywhere before the first `/`, such as `javascript:alert(1)`.
- Keep query strings and fragments: `/todos?page=2#top` is fine.
