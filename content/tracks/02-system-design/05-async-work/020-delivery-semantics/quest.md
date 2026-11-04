---
slug: "sd-delivery-semantics"
title: "Delivery Guarantees & Idempotent Consumers"
type: "quiz"
xp: 15
questions: [{"prompt": "Most job queues provide which delivery guarantee?", "options": ["At-most-once", "At-least-once", "Exactly-once"], "answer": 1}, {"prompt": "With at-least-once delivery, what must your consumers be?", "options": ["Fast", "Idempotent: safe to run twice", "Stateless only"], "answer": 1}, {"prompt": "Which operation is naturally idempotent?", "options": ["`UPDATE orders SET status = 'shipped' WHERE id = 7`", "`UPDATE stats SET count = count + 1`", "Sending an email with no deduplication"], "answer": 0}, {"prompt": "What is a dead-letter queue for?", "options": ["Faster processing", "Parking jobs that keep failing, so they don't block or loop forever", "Deleted users"], "answer": 1}, {"prompt": "\"Exactly-once processing\" in practice usually means…", "options": ["A special queue product", "At-least-once delivery plus idempotent consumers", "Running only one worker"], "answer": 1}]
---
# Delivery Guarantees & Idempotent Consumers

What happens if a worker crashes halfway through a job?

- **At-most-once**: the message is deleted before processing, so a crash **loses** it.
- **At-least-once**: the message is deleted only after success, so a crash means it's **retried**, and it may run **twice**. (This is what most queues give you.)
- **Exactly-once**: very hard in general. In practice it means *at-least-once delivery + idempotent processing*.

### Idempotent consumers

Design every job so running it twice has the same effect as running it once:

- Use **idempotency keys**: record `processed_jobs(job_id)` in the same transaction as the job's effect, and skip the job if it's already there.
- Prefer **upserts** and "set" operations (`status = 'sent'`) over increments (`count = count + 1`).
- Pass external providers your own idempotency key (Stripe and many email APIs support this).

### Poison messages & dead-letter queues

A job that fails on every attempt (bad data, a bug) would retry forever. After N attempts, move it to a **dead-letter queue (DLQ)**, alert someone, and keep the rest of the queue flowing.
