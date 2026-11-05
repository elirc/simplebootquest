---
slug: "node-methods-2"
title: "Node Drill: HTTP method semantics #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which method would you use to **replace a whole resource**?","options":["HEAD","GET","POST","PUT"],"answer":3,"explanation":"PUT: replace a whole resource."},{"prompt":"Which method would you use to **partially update a resource**?","options":["POST","GET","PATCH","HEAD"],"answer":2,"explanation":"PATCH: partially update a resource."},{"prompt":"Which describes `POST`?","options":["safe but not idempotent","safe and idempotent","idempotent but not safe","neither safe nor idempotent"],"answer":3,"explanation":"POST is neither safe nor idempotent."},{"prompt":"Which method would you use to **create or trigger an action**?","options":["GET","POST","PUT","HEAD"],"answer":1,"explanation":"POST: create or trigger an action."},{"prompt":"Which describes `GET`?","options":["idempotent but not safe","neither safe nor idempotent","safe and idempotent","safe but not idempotent"],"answer":2,"explanation":"GET is safe and idempotent."}]
---
# Node Drill: HTTP method semantics #2

**Safe** methods don't change server state. **Idempotent** methods have the same effect whether you send them once or five times, which is what makes retries safe.
