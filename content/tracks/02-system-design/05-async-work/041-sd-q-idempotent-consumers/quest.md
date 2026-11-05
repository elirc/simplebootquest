---
slug: "sd-q-idempotent-consumers"
title: "Idempotent Consumers"
type: "quiz"
xp: 15
questions: [{"prompt": "Why might a job run twice in a queue with at-least-once delivery?", "options": ["Bugs in JavaScript", "The worker did the work but crashed before acknowledging, so the job was redelivered", "Queues always duplicate jobs"], "answer": 1}, {"prompt": "Which operation is naturally idempotent?", "options": ["balance = balance + 10", "Set order status to \"shipped\"", "Send a welcome email"], "answer": 1}, {"prompt": "Where should the \"already processed\" record be written?", "options": ["In a log file", "In the same database transaction as the job's effects", "In Redis after the job"], "answer": 1}, {"prompt": "How do you avoid charging a card twice when a payment job retries?", "options": ["Hope", "Pass an idempotency key to the payment provider", "Retry faster"], "answer": 1}, {"prompt": "What does \"exactly-once effects\" usually mean in practice?", "options": ["The broker never redelivers", "At-least-once delivery combined with idempotent processing", "Using Kafka"], "answer": 1}]
---
# Idempotent Consumers

Most queues guarantee **at-least-once** delivery: a job can run **twice**. That happens when a worker crashes after doing the work but before acknowledging it, or when a timeout causes a redelivery. So every consumer must be **idempotent**: running it twice has the same effect as running it once.

Techniques:
- **Natural idempotency**: "set status to shipped" is safe to repeat. "Add 10 credits" isn't.
- **Dedupe table**: record processed job ids (`INSERT INTO processed_jobs (id) ... ON CONFLICT DO NOTHING`) **in the same transaction** as the work. If the insert does nothing, skip the job.
- **Idempotency keys for external calls**: payment and email providers accept a key, so a retry doesn't charge or send twice.
- **Conditional updates**: `UPDATE orders SET status = 'paid' WHERE id = $1 AND status = 'pending'`, then check the rows affected.

"Exactly-once" delivery is mostly a marketing term. What you can build is **exactly-once effects**, with at-least-once delivery plus idempotent processing.
