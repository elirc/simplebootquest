---
slug: "sd-q-api-keys-scopes"
title: "Authenticating API Clients"
type: "quiz"
xp: 15
resources: [{"title": "OAuth 2.0 simplified", "url": "https://www.oauth.com/"}]
questions: [{"prompt": "How should API keys be stored in your database?", "options": ["In plain text", "As a hash, with only a short prefix kept in plain text for display", "Encrypted with the user's password"], "answer": 1}, {"prompt": "Why give keys a recognisable prefix like sk_live_?", "options": ["Branding only", "Leaked keys are easy to detect (e.g. by secret scanning) and tell live from test", "It makes them shorter"], "answer": 1}, {"prompt": "A third-party app wants to read a user's todos on their behalf. Which flow fits?", "options": ["Ask for the user's password", "OAuth authorization code with PKCE and limited scopes", "Share one global API key"], "answer": 1}, {"prompt": "What do scopes provide?", "options": ["Faster requests", "Least privilege: a key or token can only do what it was granted", "Encryption"], "answer": 1}, {"prompt": "What should users be able to do with their API keys?", "options": ["Nothing after creation", "Create, name, scope, rotate and revoke them", "View them in full forever"], "answer": 1}]
---
# Authenticating API Clients

User sessions are for browsers. **Machine clients** (scripts, partner servers, integrations) need something else:

- **API keys**: long random secrets sent in a header (`Authorization: Bearer sk_live_...`).
  - Show the key **once** at creation, and store only a **hash** (like a password).
  - Add a recognisable **prefix** (`sk_live_`, `sk_test_`), so leaked keys are easy to spot (GitHub secret scanning looks for these).
  - Give keys **scopes** (`todos:read`, `todos:write`) and optional expiry, and let users **rotate** and revoke them.
- **OAuth 2.0 client credentials**: for server-to-server access with short-lived tokens.
- **OAuth authorization code + PKCE**: when a third-party app acts **on behalf of a user**. The user grants specific scopes, and the app never sees their password.
- **Webhook signatures** (HMAC): to prove that requests *you* send to customers really came from you.

Log key usage (which key, when, from where), and rate-limit per key.
