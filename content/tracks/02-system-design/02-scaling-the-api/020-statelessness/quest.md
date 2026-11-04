---
slug: "sd-statelessness"
title: "Making Your App Stateless"
type: "quiz"
xp: 15
resources: [{"title": "The Twelve-Factor App: Processes", "url": "https://12factor.net/processes"}]
questions: [{"prompt": "Your app stores sessions in memory and you add a second instance. What happens?", "options": ["Nothing changes", "Users appear randomly logged out, depending on which instance serves the request", "Sessions are shared automatically"], "answer": 1}, {"prompt": "Where should user-uploaded files live in a horizontally scaled app?", "options": ["./uploads on each server", "Object storage like S3, shared by all instances", "In memory"], "answer": 1}, {"prompt": "Three instances each run `setInterval(sendDailyDigest, 24h)`. What goes wrong?", "options": ["Nothing", "Users get the digest three times", "The interval is ignored"], "answer": 1}, {"prompt": "Why is an in-memory rate limiter weak with 4 instances?", "options": ["It is too slow", "Each instance counts separately, so the effective limit is ~4× higher", "It leaks memory"], "answer": 1}, {"prompt": "Is a per-instance in-memory cache always wrong?", "options": ["Yes, never use one", "No: it is acceptable for data that can safely be slightly stale or differ between instances", "Only in development"], "answer": 1}]
---
# Making Your App Stateless

With three API instances behind a load balancer, request #1 might hit instance A and request #2 instance B. Anything stored **in a process's memory or on its local disk** is invisible to the others. Common traps in Express apps:

| Trap | Why it breaks | Fix |
|------|---------------|-----|
| In-memory sessions (`express-session` default store) | Logged in on A, logged out on B | JWT cookies (like this app), or a shared session store (Redis/Postgres) |
| Uploads saved to `./uploads` | The file only exists on one machine | Object storage (S3, R2, GCS) |
| In-memory rate limiter | Each instance counts separately | A shared store (Redis) |
| In-memory cache | Each instance has a different view | Accept it (it's just a cache), or use Redis |
| `setInterval` cron jobs | Every instance runs the job | A single scheduler, a job queue, or DB locks |

Containers make this worse: platforms **replace instances at any time** during deploys and autoscaling, and the local disk vanishes with them. Treat processes as disposable: the Twelve-Factor App calls this *"processes are stateless and share-nothing"*.
