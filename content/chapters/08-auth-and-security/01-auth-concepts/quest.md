---
slug: auth-concepts
title: Authentication Concepts
type: quiz
xp: 20
questions:
  - prompt: "How should passwords be stored?"
    options: ["Encrypted with AES so you can decrypt them for support", "Hashed with a slow, salted algorithm like bcrypt or argon2", "Hashed with SHA-256"]
    answer: 1
    explanation: "Fast hashes like SHA-256 can be brute-forced at billions of guesses per second. bcrypt and argon2 are deliberately slow and include a salt."
  - prompt: "What is a salt?"
    options: ["A secret key stored in .env", "Random data added to each password before hashing, so identical passwords produce different hashes", "An encryption algorithm"]
    answer: 1
  - prompt: "Where is the safest place to store a session token in the browser?"
    options: ["localStorage", "An httpOnly, Secure, SameSite cookie", "A global JavaScript variable"]
    answer: 1
    explanation: "JavaScript can't read httpOnly cookies, so an XSS bug can't steal the token."
  - prompt: "What's a key downside of stateless JWTs compared to server-side sessions?"
    options: ["They can't hold user ids", "They're hard to revoke before they expire", "They only work with SQL databases"]
    answer: 1
  - prompt: "Login fails. What should the error message say?"
    options: ["'No account with that email'", "'Wrong password'", "'Invalid email or password'"]
    answer: 2
    explanation: "Separate messages let attackers find out which emails are registered (user enumeration)."
  - prompt: "Anyone can decode a JWT's payload. What stops them from changing it?"
    options: ["Nothing", "The signature: changing the payload invalidates it, and only the server has the secret", "Base64 encoding"]
    answer: 1
---
# Authentication Concepts

### Passwords: hash, never encrypt

You should **never** be able to recover a user's password. Store a **hash**: a one-way fingerprint.

```ts
import bcrypt from 'bcryptjs';
const hash = await bcrypt.hash(password, 12);  // 12 = cost factor (slow on purpose)
const ok = await bcrypt.compare(attempt, hash);
```

bcrypt adds a random **salt** to every hash. Two users with the password `hunter2` get different hashes, so precomputed "rainbow tables" are useless.

### Staying logged in: sessions vs JWTs

After login, the server hands the browser a **token** that it sends with every request.

| | Server sessions | JWT |
|-|-----------------|-----|
| Token contains | A random session id | Signed user data (`{ sub: userId, exp }`) |
| Server stores | Session rows (DB/Redis) | Nothing |
| Logout/revoke | Delete the row ✅ | Hard: valid until it expires ⚠️ |
| Scaling | Needs shared storage | Stateless |

A JWT has three base64url parts, `header.payload.signature`. The payload is **readable by anyone**, but the signature means only the server can create valid tokens. Never put secrets in a JWT.

### Where the token lives

Use a cookie with all three flags:

```ts
res.cookie('token', jwt, { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 7 * 864e5 });
```

- `httpOnly`: JavaScript can't read it, so XSS can't steal it.
- `secure`: only sent over HTTPS.
- `sameSite: 'lax'`: not sent on cross-site POSTs, which blocks most CSRF.

`localStorage` is readable by any script on the page, so one XSS bug leaks every token.
