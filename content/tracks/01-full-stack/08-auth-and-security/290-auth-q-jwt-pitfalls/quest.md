---
slug: "auth-q-jwt-pitfalls"
title: "Quiz: JWT Pitfalls"
type: "quiz"
xp: 15
resources: [{"title": "OWASP: JSON Web Token Cheat Sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html"}]
questions: [{"prompt": "A JWT payload contains `{\"role\":\"admin\"}`. Can the user read it?", "options": ["No, it is encrypted", "Yes: it is just base64url, so anyone can decode it", "Only with the secret"], "answer": 1}, {"prompt": "Why pass `algorithms: [\"HS256\"]` to jwt.verify?", "options": ["It is faster", "It stops attackers from choosing the algorithm (e.g. alg \"none\" or algorithm confusion)", "It shortens the token"], "answer": 1}, {"prompt": "A user changes their password. How do you invalidate their existing JWTs?", "options": ["You cannot do anything", "Use short expiry plus a tokenVersion on the user that tokens must match (or a denylist)", "Delete the cookie on their current device only"], "answer": 1}, {"prompt": "Where is a session token safest from XSS theft?", "options": ["localStorage", "An HttpOnly, Secure, SameSite cookie", "A global JS variable"], "answer": 1}, {"prompt": "What does the JWT signature guarantee?", "options": ["Nobody can read the token", "The header and payload were not modified since signing by someone with the key", "The user is who they say they are, forever"], "answer": 1}, {"prompt": "What should `exp` be for an access token?", "options": ["Never, for convenience", "Short, e.g. 5 to 15 minutes, with a refresh mechanism", "Exactly one year"], "answer": 1}]
---
# Quiz: JWT Pitfalls

JWTs are popular and easy to misuse:

- **The payload is readable** by anyone holding the token. Signed ≠ encrypted.
- **Always pin the algorithm** when verifying (`jwt.verify(token, secret, { algorithms: ['HS256'] })`), or attackers can try `alg: none` or algorithm confusion.
- **You can't revoke a JWT** before it expires without extra state (a denylist or a token version on the user). Keep access tokens short-lived.
- **Storage**: a token in `localStorage` can be read by any XSS. An `HttpOnly` cookie can't (but then you need CSRF protection, such as `SameSite`).
- For a classic server-rendered or same-site app, **plain server-side sessions** are often simpler and easier to revoke.
