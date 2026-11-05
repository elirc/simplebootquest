---
slug: "node-status-3"
title: "Node Drill: Choosing status codes #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"Which status code fits best?\n\n> Uploading a 50 MB file to an endpoint that accepts 1 MB","options":["413","500","400","422"],"answer":0,"explanation":"413 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A client exceeded the rate limit","options":["413","429","301","403"],"answer":1,"explanation":"429 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A well-formed body that fails a business rule (end date before start date)","options":["400","422","403","401"],"answer":1,"explanation":"422 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> Signing up with an email that is already registered","options":["409","403","413","202"],"answer":0,"explanation":"409 is the conventional answer."},{"prompt":"Which status code fits best?\n\n> A request accepted for background processing that hasn't finished yet","options":["201","202","301","200"],"answer":1,"explanation":"202 is the conventional answer."}]
---
# Node Drill: Choosing status codes #3

Status codes are part of your API's contract: 2xx success, 3xx redirect or cache, 4xx the client's fault, 5xx the server's fault. Picking the precise code (409 vs 400, 401 vs 403) helps clients react correctly.
