---
slug: "auth-q-owasp-top10"
title: "Quiz: The OWASP Top 10 in a CRUD App"
type: "quiz"
xp: 15
resources: [{"title": "OWASP Top 10", "url": "https://owasp.org/Top10/"}]
questions: [{"prompt": "Which is the #1 risk in the OWASP Top 10 (2021) and the most common CRUD bug?", "options": ["XSS", "Broken access control (e.g. IDOR)", "Clickjacking"], "answer": 1}, {"prompt": "Your API fetches a user-supplied URL to make link previews. What risk must you consider?", "options": ["CSRF", "SSRF: the server could be tricked into calling internal services such as cloud metadata", "SQL injection"], "answer": 1}, {"prompt": "Why is SHA-256 a bad choice for storing passwords?", "options": ["It is broken", "It is fast, so stolen hashes can be brute-forced quickly. Use a slow, salted hash like bcrypt or argon2", "It produces long strings"], "answer": 1}, {"prompt": "React escapes text by default. Which feature bypasses that and risks XSS?", "options": ["useState", "dangerouslySetInnerHTML", "props.children"], "answer": 1}, {"prompt": "Production 500 responses include `err.stack`. Which category is that?", "options": ["Security misconfiguration (information disclosure)", "Injection", "SSRF"], "answer": 0}, {"prompt": "What does `npm audit` help with?", "options": ["Vulnerable and outdated components", "Broken access control", "Rate limiting"], "answer": 0}]
---
# Quiz: The OWASP Top 10 in a CRUD App

The OWASP Top 10 lists the most common web vulnerabilities. In a typical Express + React CRUD app they look like this:

| Risk | What it looks like here | Defence |
|------|-------------------------|---------|
| Broken access control | `GET /todos/42` returns someone else's todo | Scope every query by owner |
| Cryptographic failures | Passwords stored with SHA-256 | bcrypt/argon2, HTTPS everywhere |
| Injection | String-built SQL | Parameterised queries / Prisma |
| Insecure design | No rate limit on login | Threat-model the feature |
| Security misconfiguration | Stack traces in prod responses | `NODE_ENV=production`, a generic 500 |
| Vulnerable components | Old packages with CVEs | `npm audit`, Dependabot |
| Auth failures | No lockout, weak sessions | Rate limits, secure cookies |
| Integrity failures | Unpinned CDN scripts | Lockfiles, SRI |
| Logging failures | No audit trail, or passwords in logs | Structured, redacted logs |
| SSRF | `fetch(req.body.url)` on the server | Allow-list hosts |
