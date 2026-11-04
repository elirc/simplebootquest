---
slug: "auth-oauth-quiz"
title: "Checkpoint: OAuth & Social Login"
type: "quiz"
xp: 15
questions: [{"prompt": "In \"Sign in with GitHub\", who checks the user's password?", "options": ["Your server", "GitHub", "The browser"], "answer": 1}, {"prompt": "What is the `state` parameter for?", "options": ["Storing user preferences", "Preventing CSRF on the callback: it must match what you sent", "Choosing the scope"], "answer": 1}, {"prompt": "Where should the code-for-token exchange happen?", "options": ["In the browser JavaScript", "On your server, where the client secret is kept", "Either"], "answer": 1}, {"prompt": "What does PKCE protect against?", "options": ["Slow logins", "An intercepted authorization code being redeemed by an attacker", "XSS"], "answer": 1}, {"prompt": "After OAuth succeeds, how does your app usually keep the user logged in?", "options": ["By sending GitHub's access token with every request to your API", "By creating its own session cookie for the local user", "It doesn't"], "answer": 1}]
---
# Checkpoint: OAuth & Social Login

"Sign in with GitHub/Google" uses **OAuth 2.0** (plus **OpenID Connect** for identity). The *authorization code flow with PKCE*:

1. Your app redirects the user to GitHub with `client_id`, `redirect_uri`, `scope`, a random `state`, and a PKCE `code_challenge`.
2. The user logs in **on GitHub** (your app never sees their password) and approves.
3. GitHub redirects back to your `redirect_uri` with a short-lived `code` and the same `state`.
4. Your **server** exchanges the code (plus the PKCE `code_verifier` and client secret) for an access token.
5. Your server fetches the user's profile, finds or creates a local user, and starts your own session.

Libraries like Auth.js, Lucia or Passport handle the details. Know the flow so you can debug it.

Answer every question correctly to earn the XP.
