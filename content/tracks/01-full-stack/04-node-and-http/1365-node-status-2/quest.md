---
slug: "node-status-2"
title: "Node Drill: Choosing status codes #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which status code fits best?\n\n> The database is down for maintenance; retry later","options":["500","409","503","502"],"answer":2,"explanation":"503 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A resource moved permanently to a new URL","options":["301","404","304","302"],"answer":0,"explanation":"301 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A new todo was created successfully","options":["422","202","204","201"],"answer":3,"explanation":"201 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A todo was deleted and there is nothing to return","options":["201","200","204","404"],"answer":2,"explanation":"204 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> GET /todos/999 where todo 999 does not exist","options":["503","413","404","422"],"answer":2,"explanation":"404 is the conventional answer."}]
---
# Node Drill: Choosing status codes #2

Status codes are part of your API's contract: 2xx success, 3xx redirect or cache, 4xx the client's fault, 5xx the server's fault. Picking the precise code (409 vs 400, 401 vs 403) helps clients react correctly.
