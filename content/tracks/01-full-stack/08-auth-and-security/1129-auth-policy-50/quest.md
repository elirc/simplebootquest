---
slug: "auth-policy-50"
title: "Security Drill: Applying an access policy #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A **member** tries to **delete** a **published** course that they own. What should the API do?","options":["Reject with 400","Reject with 401 (log in first)","Allow it","Reject with 403 (or 404 to hide that it exists)"],"answer":3,"explanation":"The policy forbids it."},{"prompt":"A **editor** tries to **delete** a **draft** flight that belongs to someone else. What should the API do?","options":["Reject with 401 (log in first)","Reject with 403 (or 404 to hide that it exists)","Reject with 400","Allow it"],"answer":1,"explanation":"The policy forbids it."},{"prompt":"A **guest** tries to **publish** a **published** movie that belongs to someone else. What should the API do?","options":["Allow it","Reject with 403 (or 404 to hide that it exists)","Reject with 400","Reject with 401 (log in first)"],"answer":3,"explanation":"The policy forbids it."},{"prompt":"A **editor** tries to **delete** a **draft** song that belongs to someone else. What should the API do?","options":["Allow it","Reject with 403 (or 404 to hide that it exists)","Reject with 401 (log in first)","Reject with 400"],"answer":1,"explanation":"The policy forbids it."},{"prompt":"A **guest** tries to **update** a **draft** recipe that belongs to someone else. What should the API do?","options":["Reject with 400","Reject with 401 (log in first)","Allow it","Reject with 403 (or 404 to hide that it exists)"],"answer":1,"explanation":"The policy forbids it."}]
---
# Security Drill: Applying an access policy #50

This app's policy:

- **Read**: published items are public. Drafts are readable by their owner, editors and admins.
- **Update**: editors and admins can update anything. Owners can update their own **drafts**.
- **Delete**: admins can delete anything. Owners can delete their own drafts.
- **Publish**: editors and admins, drafts only.
- Guests can only read published items.

Authorization bugs (IDOR, missing ownership checks) are the #1 web vulnerability, so practise applying the rules exactly.
