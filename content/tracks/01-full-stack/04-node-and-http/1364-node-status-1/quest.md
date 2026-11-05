---
slug: "node-status-1"
title: "Node Drill: Choosing status codes #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which status code fits best?\n\n> DELETE on /todos, which only supports GET and POST","options":["502","429","403","405"],"answer":3,"explanation":"405 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> The request body is missing the required `title` field","options":["403","401","409","400"],"answer":3,"explanation":"400 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> The request has no session cookie and the route needs login","options":["409","401","405","403"],"answer":1,"explanation":"401 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A successful GET of a list of todos","options":["204","200","401","201"],"answer":1,"explanation":"200 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> Sending XML to an endpoint that only accepts JSON","options":["302","400","415","401"],"answer":2,"explanation":"415 is the conventional answer."}]
---
# Node Drill: Choosing status codes #1

Status codes are part of your API's contract: 2xx success, 3xx redirect or cache, 4xx the client's fault, 5xx the server's fault. Picking the precise code (409 vs 400, 401 vs 403) helps clients react correctly.
