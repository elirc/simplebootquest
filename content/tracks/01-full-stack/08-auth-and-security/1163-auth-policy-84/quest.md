---
slug: "auth-policy-84"
title: "Security Drill: Applying an access policy #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A **guest** tries to **read** a **draft** transaction that belongs to someone else. What should the API do?","options":["Reject with 400","Allow it","Reject with 403 (or 404 to hide that it exists)","Reject with 401 (log in first)"],"answer":2,"explanation":"The policy forbids it."},{"prompt":"A **editor** tries to **read** a **published** employee that belongs to someone else. What should the API do?","options":["Reject with 403 (or 404 to hide that it exists)","Allow it","Reject with 401 (log in first)","Reject with 400"],"answer":1,"explanation":"The policy allows it."},{"prompt":"A **member** tries to **update** a **published** repo that belongs to someone else. What should the API do?","options":["Allow it","Reject with 403 (or 404 to hide that it exists)","Reject with 401 (log in first)","Reject with 400"],"answer":1,"explanation":"The policy forbids it."},{"prompt":"A **editor** tries to **read** a **draft** movie that they own. What should the API do?","options":["Allow it","Reject with 400","Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)"],"answer":0,"explanation":"The policy allows it."},{"prompt":"A **member** tries to **read** a **draft** city that belongs to someone else. What should the API do?","options":["Reject with 403 (or 404 to hide that it exists)","Reject with 401 (log in first)","Reject with 400","Allow it"],"answer":0,"explanation":"The policy forbids it."}]
---
# Security Drill: Applying an access policy #84

This app's policy:

- **Read**: published items are public. Drafts are readable by their owner, editors and admins.
- **Update**: editors and admins can update anything. Owners can update their own **drafts**.
- **Delete**: admins can delete anything. Owners can delete their own drafts.
- **Publish**: editors and admins, drafts only.
- Guests can only read published items.

Authorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.
