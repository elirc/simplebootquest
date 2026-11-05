---
slug: "auth-cookies-1"
title: "Security Drill: Will the browser send the cookie? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A session cookie is set with `SameSite=Lax; Secure; HttpOnly`. Is it sent when another website calls your API with fetch(…, { credentials: \"include\" })?","options":["Only if the page uses JavaScript to read it","Only for GET requests","Yes","No"],"answer":3,"explanation":"The browser leaves it out."},{"prompt":"A session cookie is set with `SameSite=Lax; HttpOnly`. Is it sent when another website calls your API with fetch(…, { credentials: \"include\" })?","options":["Only if the page uses JavaScript to read it","Only for GET requests","Yes","No"],"answer":3,"explanation":"The browser leaves it out."},{"prompt":"A session cookie is set with `SameSite=Lax; Secure; HttpOnly`. Is it sent when the user clicks a link to your site from another website (top-level GET)?","options":["Yes","Only if the page uses JavaScript to read it","Only for GET requests","No"],"answer":0,"explanation":"The browser includes it."},{"prompt":"A session cookie is set with `SameSite=Lax; HttpOnly`. Is it sent when your own frontend calls your API on the same site with fetch?","options":["Only for GET requests","Yes","No","Only if the page uses JavaScript to read it"],"answer":1,"explanation":"The browser includes it."},{"prompt":"A session cookie is set with `SameSite=Strict; Secure; HttpOnly`. Is it sent when the user visits your site over plain http:// (no TLS)?","options":["Only if the page uses JavaScript to read it","Only for GET requests","No","Yes"],"answer":2,"explanation":"The browser leaves it out."}]
---
# Security Drill: Will the browser send the cookie? #1

Cookie attributes decide when a browser sends a cookie:

- `SameSite=Strict`: only same-site requests.
- `SameSite=Lax` (the default): same-site requests, plus **top-level GET navigations** from other sites (clicking a link), but not cross-site POSTs or fetches.
- `SameSite=None; Secure`: every request, over HTTPS only.
- `Secure`: never over plain HTTP.

That's why `Lax` blocks most CSRF.
