---
slug: "ae-q-ai-security-bugs"
title: "Security Bugs Agents Commonly Introduce"
type: "quiz"
xp: 15
resources: [{"title": "OWASP Cheat Sheet Series", "url": "https://cheatsheetseries.owasp.org/"}]
questions: [{"prompt": "A route uses requireAuth and then prisma.todo.findUnique({ where: { id } }). What is missing?", "options": ["Nothing", "An ownership check, e.g. scoping by userId", "A try/catch"], "answer": 1}, {"prompt": "Why is `data: req.body` in a Prisma update dangerous?", "options": ["It is slow", "Clients can set fields they should not, like role or ownerId (mass assignment)", "Prisma rejects it"], "answer": 1}, {"prompt": "The agent \"fixed\" a TLS error by setting rejectUnauthorized: false. What should you do?", "options": ["Accept it", "Reject it and fix the real certificate or CA configuration", "Ship it on Fridays only"], "answer": 1}, {"prompt": "What is wrong with Math.random() for password reset tokens?", "options": ["Nothing", "It is not cryptographically secure. Use crypto.randomBytes or randomUUID", "It is too slow"], "answer": 1}, {"prompt": "The agent sets CORS origin \"*\" with credentials: true to stop an error. Is that acceptable?", "options": ["Yes", "No: browsers reject it, and the right fix is an explicit allow-list of origins"], "answer": 1}]
---
# Security Bugs Agents Commonly Introduce

Generated code often works **and** is insecure, because the insecure version is common in training data and passes the happy-path test. Look for these in every review:

- **Missing authorization**: the route checks that a user is *logged in*, but not that they *own* the record (IDOR).
- **SQL built from strings**: `` `... WHERE id = ${req.params.id}` `` in `$queryRawUnsafe`, or raw `pg` queries.
- **Mass assignment**: `prisma.user.update({ data: req.body })`, so the client can set `role: 'admin'`.
- **Secrets in code or logs**: a hardcoded key "for testing", or `console.log(req.headers)`.
- **XSS**: `dangerouslySetInnerHTML` with user content, or `href={userUrl}` without blocking `javascript:` URLs.
- **Weak crypto**: `Math.random()` for tokens, MD5 or SHA for passwords, comparing secrets with `===`.
- **Overly permissive CORS** (`origin: '*'` with credentials) to "fix" an error.
- **Disabling checks to make errors go away**: `// @ts-ignore`, `eslint-disable`, `rejectUnauthorized: false`.

Ask the agent to do a **security review** of its own diff, and still read it yourself.
