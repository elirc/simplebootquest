---
slug: "sd-q-secrets-management"
title: "Managing Secrets"
type: "quiz"
xp: 15
resources: [{"title": "OWASP: Secrets Management Cheat Sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"}]
questions: [{"prompt": "You accidentally pushed an API key to a public repo. What is the first action?", "options": ["Force-push to remove the commit", "Revoke and rotate the key immediately, then clean up the history", "Make the repo private"], "answer": 1}, {"prompt": "Is a value in VITE_STRIPE_SECRET safe in a React app?", "options": ["Yes, env vars are secret", "No: VITE_ variables are embedded in the public JavaScript bundle"], "answer": 1}, {"prompt": "What should the app's production database user be allowed to do?", "options": ["Everything, including DROP DATABASE", "Only what the app needs (read and write its tables), not schema-destructive operations", "Nothing"], "answer": 1}, {"prompt": "How can you rotate a JWT signing key without logging everyone out?", "options": ["You cannot", "Accept both the old and new keys (identified by kid) during a transition period", "Change it at midnight"], "answer": 1}, {"prompt": "Why prefer OIDC federation from CI to the cloud over static access keys?", "options": ["It is faster", "Credentials are short-lived and nothing long-lived is stored in CI", "It is required by Git"], "answer": 1}]
---
# Managing Secrets

Secrets (database passwords, API keys, JWT signing keys) leak in predictable ways: committed to git, printed in logs, pasted in chat, baked into Docker images, or exposed to the frontend bundle.

Good practice:
- **Never commit secrets.** Use `.env` files locally (gitignored, with an `.env.example` listing the names), and the platform's **secret store** in CI and production.
- **Anything in the frontend bundle is public.** `VITE_*` variables are compiled into JavaScript that anyone can read. Only put public values there.
- **Least privilege**: the app's database user can't drop tables, and CI deploy keys can only deploy.
- **Rotation**: be able to rotate any secret without downtime (support two valid keys during the switch, for example the JWT `kid` header).
- **Detection**: enable secret scanning (GitHub push protection), and **if a secret leaks, rotate it immediately**. Deleting the commit isn't enough, because it's already been cloned, cached or indexed.
- **Short-lived credentials** beat long-lived ones: OIDC from CI to the cloud instead of static access keys.
