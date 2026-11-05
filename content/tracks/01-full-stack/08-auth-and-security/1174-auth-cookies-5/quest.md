---
slug: "auth-cookies-5"
title: "Security Drill: Will the browser send the cookie? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A session cookie is set with `SameSite=Strict; HttpOnly`. Is it sent when another website auto-submits a hidden POST form to your API?","options":["Only if the page uses JavaScript to read it","Only for GET requests","No","Yes"],"answer":2,"explanation":"The browser leaves it out."},{"prompt":"A session cookie is set with `SameSite=None; Secure; HttpOnly`. Is it sent when your own frontend calls your API on the same site with fetch?","options":["Yes","Only if the page uses JavaScript to read it","No","Only for GET requests"],"answer":0,"explanation":"The browser includes it."},{"prompt":"A session cookie is set with `SameSite=Lax; HttpOnly`. Is it sent when another website auto-submits a hidden POST form to your API?","options":["Only for GET requests","Yes","Only if the page uses JavaScript to read it","No"],"answer":3,"explanation":"The browser leaves it out."},{"prompt":"A session cookie is set with `SameSite=Strict; HttpOnly`. Is it sent when your own frontend calls your API on the same site with fetch?","options":["Only for GET requests","Only if the page uses JavaScript to read it","No","Yes"],"answer":3,"explanation":"The browser includes it."},{"prompt":"A session cookie is set with `SameSite=Lax; Secure; HttpOnly`. Is it sent when another website auto-submits a hidden POST form to your API?","options":["Only if the page uses JavaScript to read it","No","Only for GET requests","Yes"],"answer":1,"explanation":"The browser leaves it out."}]
---
# Security Drill: Will the browser send the cookie? #5

Cookie attributes decide when a browser sends a cookie:

- `SameSite=Strict`: only same-site requests.
- `SameSite=Lax` (the default): same-site requests, plus **top-level GET navigations** from other sites (clicking a link), but not cross-site POSTs or fetches.
- `SameSite=None; Secure`: every request, over HTTPS only.
- `Secure`: never over plain HTTP.

That's why `Lax` blocks most CSRF.
