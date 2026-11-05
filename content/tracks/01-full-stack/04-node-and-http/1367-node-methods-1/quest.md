---
slug: "node-methods-1"
title: "Node Drill: HTTP method semantics #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which method would you use to **read a resource**?","options":["HEAD","POST","GET","PUT"],"answer":2,"explanation":"GET: read a resource."},{"prompt":"Which method would you use to **read only the headers**?","options":["HEAD","PUT","POST","GET"],"answer":0,"explanation":"HEAD: read only the headers."},{"prompt":"Which method would you use to **ask what is allowed (CORS preflight)**?","options":["GET","POST","HEAD","OPTIONS"],"answer":3,"explanation":"OPTIONS: ask what is allowed (CORS preflight)."},{"prompt":"Which describes `PATCH`?","options":["safe and idempotent","idempotent but not safe","neither safe nor idempotent","not safe, and not idempotent in general"],"answer":3,"explanation":"PATCH is not safe, and not idempotent in general."},{"prompt":"Which method would you use to **remove a resource**?","options":["GET","DELETE","POST","HEAD"],"answer":1,"explanation":"DELETE: remove a resource."}]
---
# Node Drill: HTTP method semantics #1

**Safe** methods don't change server state. **Idempotent** methods have the same effect whether you send them once or five times, which is what makes retries safe.
