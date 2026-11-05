---
slug: "auth-policy-76"
title: "Security Drill: Applying an access policy #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A **editor** tries to **publish** a **published** city that they own. What should the API do?","options":["Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)","Allow it","Reject with 400"],"answer":1,"explanation":"The policy forbids it."},{"prompt":"A **member** tries to **read** a **draft** repo that they own. What should the API do?","options":["Allow it","Reject with 401 (log in first)","Reject with 400","Reject with 403 (or 404 to hide that it exists)"],"answer":0,"explanation":"The policy allows it."},{"prompt":"A **admin** tries to **delete** a **draft** course that belongs to someone else. What should the API do?","options":["Reject with 400","Allow it","Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)"],"answer":1,"explanation":"The policy allows it."},{"prompt":"A **admin** tries to **publish** a **published** ticket that belongs to someone else. What should the API do?","options":["Reject with 400","Allow it","Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)"],"answer":3,"explanation":"The policy forbids it."},{"prompt":"A **admin** tries to **publish** a **draft** movie that belongs to someone else. What should the API do?","options":["Reject with 403 (or 404 to hide that it exists)","Reject with 400","Allow it","Reject with 401 (log in first)"],"answer":2,"explanation":"The policy allows it."}]
---
# Security Drill: Applying an access policy #76

This app's policy:

- **Read**: published items are public. Drafts are readable by their owner, editors and admins.
- **Update**: editors and admins can update anything. Owners can update their own **drafts**.
- **Delete**: admins can delete anything. Owners can delete their own drafts.
- **Publish**: editors and admins, drafts only.
- Guests can only read published items.

Authorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.
