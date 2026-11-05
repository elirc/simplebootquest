---
slug: "sd-q-dead-letters"
title: "Retries and Dead-Letter Queues"
type: "quiz"
xp: 15
questions: [{"prompt": "Why add jitter to retry backoff?", "options": ["To make debugging harder", "So many failed jobs do not retry at the same instant and overload the recovering service", "Queues require it"], "answer": 1}, {"prompt": "A job fails because the referenced user was deleted. Should it be retried 10 times?", "options": ["Yes", "No: it is a permanent error, so dead-letter or drop it immediately"], "answer": 1}, {"prompt": "What is a dead-letter queue for?", "options": ["Deleting jobs", "Holding jobs that exhausted their retries, so they can be inspected and replayed", "Faster processing"], "answer": 1}, {"prompt": "What should trigger an alert?", "options": ["Every retry", "A growing dead-letter queue or rising job age", "A successful job"], "answer": 1}, {"prompt": "One malformed job crashes the worker process every time it is picked up. What is this called?", "options": ["A race condition", "A poison message", "Backpressure"], "answer": 1}]
---
# Retries and Dead-Letter Queues

Some jobs fail for **transient** reasons (a timeout or a 503), and retrying fixes them. Others fail for **permanent** reasons (a deleted user, invalid data), and retrying forever just burns resources and can block other work.

A healthy setup:
- **Retry with exponential backoff and jitter**: wait 10 s, then 40 s, then 2 min… A random component stops retries from a big outage all firing at once.
- **A maximum attempt count** (say 5 to 10).
- **Then move the job to a dead-letter queue (DLQ)** with the error attached. Nothing is silently lost.
- **Alert on DLQ growth**, and give operators a way to inspect, fix and **replay** dead jobs.
- **Classify errors**: don't retry validation errors at all. Fail them straight to the DLQ (or drop them with a log line).
- **Poison messages**: one bad job that crashes the worker shouldn't take the whole queue down. Catch the error per job.

BullMQ, SQS, RabbitMQ and pg-boss all support attempts, backoff and dead-lettering.
