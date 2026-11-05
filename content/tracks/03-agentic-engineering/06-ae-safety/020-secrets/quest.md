---
slug: "ae-secrets"
title: "Secrets & Sensitive Data"
type: "quiz"
xp: 15
resources: [{"title": "gitleaks", "url": "https://github.com/gitleaks/gitleaks"}]
questions: [{"prompt": "An API key was accidentally committed and pushed. What is the essential step?", "options": ["Delete the commit", "Rotate (revoke and replace) the key immediately", "Make the repo private"], "answer": 1}, {"prompt": "What should the agent usually read instead of `.env`?", "options": ["Nothing", "`.env.example`, which documents the variables without values", "The production vault"], "answer": 1}, {"prompt": "You need to debug an issue with a customer's order. What do you give the agent?", "options": ["The real customer record with name and address", "A synthetic or anonymised reproduction of the data", "The production database password"], "answer": 1}, {"prompt": "Which CI check helps catch leaked keys?", "options": ["Prettier", "Secret scanning (e.g. gitleaks)", "Unit tests"], "answer": 1}, {"prompt": "The agent suggests hard-coding the API key \"just to make it work\". Response?", "options": ["Accept it", "Refuse: load it from environment configuration instead", "Commit it to a branch"], "answer": 1}]
---
# Secrets & Sensitive Data

Everything in an agent's context may be sent to a model provider, logged, or echoed into files and commits. So:

- **Never paste secrets into prompts** (API keys, passwords, production connection strings).
- Keep secrets in `.env` (gitignored), and consider **denying the agent read access to `.env` files** via permission rules. It usually only needs `.env.example`.
- Watch for agents **hard-coding** secrets they saw ("I'll just put the key in config.ts so it works").
- Don't let agents print secrets in command output (`cat .env`, `env`, verbose logs).
- Be careful with **customer data**: don't paste production records or PII into prompts. Use synthetic or anonymised data.
- Run **secret scanning** in CI and as a pre-commit hook (gitleaks, GitHub secret scanning).

If a secret *does* leak (committed, pasted or logged): **rotate it immediately.** Deleting the commit isn't enough, because it may already be cached, cloned or indexed.
