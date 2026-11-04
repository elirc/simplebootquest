---
slug: "sd-why-queues"
title: "Why Queues?"
type: "quiz"
xp: 15
resources: [{"title": "BullMQ", "url": "https://docs.bullmq.io/"}, {"title": "pg-boss", "url": "https://github.com/timgit/pg-boss"}]
questions: [{"prompt": "What is the main user-facing benefit of moving email sending to a queue?", "options": ["Emails arrive faster", "The API responds immediately instead of waiting on the email provider", "Emails are cheaper"], "answer": 1}, {"prompt": "A traffic spike creates 50,000 jobs. With a queue, what happens?", "options": ["The API crashes", "Jobs build up and workers drain them at a sustainable rate", "Jobs are dropped"], "answer": 1}, {"prompt": "Why might you choose a Postgres-backed queue (pg-boss) for a small app?", "options": ["It is the fastest queue", "No extra infrastructure, and jobs can be enqueued in the same transaction as your data", "Redis is deprecated"], "answer": 1}, {"prompt": "Which task should NOT go to a background job?", "options": ["Generating a monthly PDF report", "Validating the request body before responding", "Resizing an uploaded image"], "answer": 1}, {"prompt": "How do you handle more background work as you grow?", "options": ["Make the API slower", "Add more worker processes", "Increase the HTTP timeout"], "answer": 1}]
---
# Why Queues?

A **message queue** sits between a **producer** (your API) and **consumers** (workers):

```
API ──enqueue("send-welcome-email", {userId})──▶ [ queue ] ──▶ worker ──▶ email provider
```

Benefits:

- **Fast responses**: the API returns as soon as the job is enqueued.
- **Absorbing spikes**: 10,000 signups in a minute become a backlog that workers drain at a steady rate, instead of 10,000 simultaneous calls to the email provider.
- **Resilience**: if the email provider is down, jobs wait and retry instead of failing user requests.
- **Independent scaling**: add workers without touching the API.

### Tools

For Node: **BullMQ** (on Redis), **pg-boss** or **Graphile Worker** (on Postgres, so there's no extra infrastructure!), or managed services like SQS and Cloud Tasks. For most CRUD apps, a Postgres-backed queue is plenty, and it can share transactions with your data.

### What belongs in a job?

Emails, notifications, image and video processing, reports and exports, webhooks to third parties, search indexing. Anything slow, flaky, or not needed for the response.
