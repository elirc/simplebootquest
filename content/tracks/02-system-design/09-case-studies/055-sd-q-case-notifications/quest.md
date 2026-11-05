---
slug: "sd-q-case-notifications"
title: "Case Study: In-App Notifications"
type: "quiz"
xp: 15
questions: [{"prompt": "Why fan out notifications in a background job?", "options": ["It is required by Postgres", "Computing recipients and inserting many rows should not slow down the user's comment request", "Jobs are free"], "answer": 1}, {"prompt": "Which index makes unread counts cheap?", "options": ["An index on created_at", "A partial index on user_id WHERE read_at IS NULL", "No index"], "answer": 1}, {"prompt": "How do you avoid notifying users about their own actions?", "options": ["You cannot", "Exclude the actor when computing recipients", "Ask users to ignore them"], "answer": 1}, {"prompt": "What is a lightweight way to update the badge without WebSockets?", "options": ["Reload the page", "Poll a cheap unread-count endpoint every so often (cacheable briefly)", "Email the user"], "answer": 1}, {"prompt": "\"Ada and 12 others liked your post\" is an example of…", "options": ["Sharding", "Aggregation (grouping notifications)", "Encryption"], "answer": 1}]
---
# Case Study: In-App Notifications

**Problem**: show a 🔔 badge with unread notifications ("Ada commented on your post"), and a list, for 1M users.

**Data model**:
```
notifications(id, user_id, type, actor_id, subject_id, read_at, created_at)
index on (user_id, created_at DESC)
partial index on (user_id) WHERE read_at IS NULL     -- fast unread counts
```

**Creating them**: the action (a new comment) writes the comment, then **enqueues** a "fan-out" job (an outbox entry). The job computes recipients (post author, thread participants, minus the actor and anyone who muted the thread) and bulk-inserts notification rows. The request never waits on fan-out.

**Aggregation**: "Ada and 12 others liked your post" means grouping by `(user_id, type, subject_id)` within a time window, either when reading or by updating an existing unread row.

**Delivery**: the badge polls a cheap `GET /notifications/unread-count` (cacheable for a few seconds), or listens on SSE or WebSockets for instant updates. Email or push digests are separate jobs that respect the user's preferences.

**Retention**: delete read notifications after 90 days.
