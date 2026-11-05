---
slug: "sd05-async-choice-1"
title: "Design Drill: Sync or async? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"How should you **check that a coupon code is valid at checkout**?","options":["Queue a job, and show a placeholder until it's ready","Queue it (outbox pattern), and respond to the signup immediately","Do it synchronously, with an idempotency key, and confirm via a webhook","Do it synchronously in the request"],"answer":3},{"prompt":"How should you **generate thumbnails for an uploaded photo**?","options":["Queue it (outbox pattern), and respond to the signup immediately","Do it synchronously in the request","Do it synchronously, with an idempotency key, and confirm via a webhook","Queue a job, and show a placeholder until it's ready"],"answer":3},{"prompt":"How should you **validate a form field**?","options":["Do it synchronously, with an idempotency key, and confirm via a webhook","Queue it (outbox pattern), and respond to the signup immediately","Queue a job, and show a placeholder until it's ready","Do it synchronously in the request"],"answer":3},{"prompt":"How should you **export a 200k-row CSV**?","options":["Queue a job, and show a placeholder until it's ready","Queue it (outbox pattern), and respond to the signup immediately","Queue a job, then notify the user with a download link","Do it synchronously in the request"],"answer":2},{"prompt":"How should you **notify 10,000 followers about a new post**?","options":["Fan out in background jobs, in batches","Queue it (outbox pattern), and respond to the signup immediately","Queue a job, and show a placeholder until it's ready","Do it synchronously in the request"],"answer":0}]
---
# Design Drill: Sync or async? #1

Do work **inside the request** only when the user needs the result right now. Everything else (emails, image processing, webhooks, reports) goes to a queue, with retries and idempotent consumers.
