---
slug: "auth-policy-16"
title: "Security Drill: Applying an access policy #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A **editor** tries to **publish** a **draft** recipe that belongs to someone else. What should the API do?","options":["Reject with 400","Reject with 401 (log in first)","Allow it","Reject with 403 (or 404 to hide that it exists)"],"answer":2,"explanation":"The policy allows it."},{"prompt":"A **admin** tries to **update** a **draft** order that they own. What should the API do?","options":["Allow it","Reject with 401 (log in first)","Reject with 400","Reject with 403 (or 404 to hide that it exists)"],"answer":0,"explanation":"The policy allows it."},{"prompt":"A **guest** tries to **delete** a **draft** event that belongs to someone else. What should the API do?","options":["Reject with 401 (log in first)","Allow it","Reject with 403 (or 404 to hide that it exists)","Reject with 400"],"answer":0,"explanation":"The policy forbids it."},{"prompt":"A **guest** tries to **update** a **published** plant that belongs to someone else. What should the API do?","options":["Reject with 403 (or 404 to hide that it exists)","Reject with 401 (log in first)","Allow it","Reject with 400"],"answer":1,"explanation":"The policy forbids it."},{"prompt":"A **editor** tries to **read** a **published** recipe that belongs to someone else. What should the API do?","options":["Allow it","Reject with 400","Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)"],"answer":0,"explanation":"The policy allows it."}]
---
# Security Drill: Applying an access policy #16

This app's policy:

- **Read**: published items are public. Drafts are readable by their owner, editors and admins.
- **Update**: editors and admins can update anything. Owners can update their own **drafts**.
- **Delete**: admins can delete anything. Owners can delete their own drafts.
- **Publish**: editors and admins, drafts only.
- Guests can only read published items.

Authorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.
