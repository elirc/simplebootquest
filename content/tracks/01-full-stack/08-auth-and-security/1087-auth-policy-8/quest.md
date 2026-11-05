---
slug: "auth-policy-8"
title: "Security Drill: Applying an access policy #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A **admin** tries to **update** a **published** order that belongs to someone else. What should the API do?","options":["Reject with 401 (log in first)","Reject with 400","Reject with 403 (or 404 to hide that it exists)","Allow it"],"answer":3,"explanation":"The policy allows it."},{"prompt":"A **editor** tries to **update** a **draft** transaction that they own. What should the API do?","options":["Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)","Reject with 400","Allow it"],"answer":3,"explanation":"The policy allows it."},{"prompt":"A **editor** tries to **read** a **published** student that they own. What should the API do?","options":["Reject with 400","Reject with 401 (log in first)","Allow it","Reject with 403 (or 404 to hide that it exists)"],"answer":2,"explanation":"The policy allows it."},{"prompt":"A **member** tries to **read** a **draft** event that they own. What should the API do?","options":["Reject with 403 (or 404 to hide that it exists)","Reject with 400","Reject with 401 (log in first)","Allow it"],"answer":3,"explanation":"The policy allows it."},{"prompt":"A **member** tries to **read** a **draft** hotel that belongs to someone else. What should the API do?","options":["Reject with 401 (log in first)","Reject with 400","Reject with 403 (or 404 to hide that it exists)","Allow it"],"answer":2,"explanation":"The policy forbids it."}]
---
# Security Drill: Applying an access policy #8

This app's policy:

- **Read**: published items are public. Drafts are readable by their owner, editors and admins.
- **Update**: editors and admins can update anything. Owners can update their own **drafts**.
- **Delete**: admins can delete anything. Owners can delete their own drafts.
- **Publish**: editors and admins, drafts only.
- Guests can only read published items.

Authorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.
