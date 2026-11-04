---
slug: "auth-password-reset"
title: "Password Reset Tokens"
type: "code"
language: "ts"
xp: 25
hints: ["`crypto.getRandomValues(new Uint8Array(32))` gives secure random bytes.", "Delete the entry before checking expiry, so expired tokens are cleaned up too."]
resources: [{"title": "OWASP: Forgot password", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html"}]
---
# Password Reset Tokens

The "forgot password" flow is a favourite target for attackers. A secure design:

1. Generate a **random**, unguessable token (`crypto.getRandomValues`, 32 bytes). Never use `Math.random`.
2. Store only a **hash** of the token (SHA-256) plus an expiry. If the database leaks, the tokens can't be used.
3. Email the raw token to the user in a link.
4. On use: hash the submitted token, look it up, check the expiry, and **delete it** (single use).
5. Respond the same way whether or not the email exists ("If that account exists, we've sent an email").

## Your task

`createResetService({ now, store })` (where `store` is a `Map` from tokenHash to `{ userId, expiresAt }`) returns:

- `async issue(userId)`: creates a 32-byte random token, hex-encoded (64 characters), stores `sha256hex(token)` with an expiry 30 minutes after `now()` (in ms), and returns the **raw** token.
- `async redeem(token)`: resolves to the `userId` and deletes the entry. Throws `Error('Invalid or expired token')` if it's unknown or expired (expired entries are deleted too).
- Issuing a new token for a user **invalidates** their previous tokens.

Also implement `async sha256hex(text)` with `crypto.subtle.digest`.
