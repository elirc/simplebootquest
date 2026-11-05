---
slug: "sd-q-choosing-a-queue"
title: "Choosing a Queue"
type: "quiz"
xp: 15
resources: [{"title": "BullMQ docs", "url": "https://docs.bullmq.io/"}, {"title": "pg-boss on GitHub", "url": "https://github.com/timgit/pg-boss"}]
questions: [{"prompt": "A small app on Postgres needs to send emails after signup, reliably. A simple good choice?", "options": ["Kafka", "A Postgres-backed queue (pg-boss / Graphile Worker), enqueued in the signup transaction", "A cron job reading logs"], "answer": 1}, {"prompt": "Several independent services must all react to every \"order placed\" event, and you may need to replay history. Which fits?", "options": ["A simple job queue", "An event log like Kafka", "setTimeout"], "answer": 1}, {"prompt": "What is a benefit of enqueueing a job in the same database transaction as the data change?", "options": ["Speed", "There is no case where the data is saved but the job is lost (or the reverse)", "It avoids Redis"], "answer": 1}, {"prompt": "Why might a team avoid running Kafka for a simple app?", "options": ["It is illegal", "It is operationally heavy, and a job queue meets the need", "It cannot store messages"], "answer": 1}, {"prompt": "What does BullMQ use as its backing store?", "options": ["PostgreSQL", "Redis", "S3"], "answer": 1}]
---
# Choosing a Queue

You don't need Kafka for sending emails. Match the tool to the job:

| Tool | Good for | Watch out for |
|------|----------|---------------|
| **pg-boss / Graphile Worker** (Postgres-backed) | Small and medium apps already on Postgres. Jobs can be enqueued in the **same transaction** as your data | Throughput is limited by the database |
| **BullMQ** (Redis) | Fast job queues with retries, delays, cron and priorities, in Node | Needs Redis with persistence configured |
| **SQS / Cloud Tasks** (managed) | No servers to run, scales a lot, has a DLQ | Visibility timeouts, ordering only in FIFO queues |
| **RabbitMQ** | Flexible routing (topics, fan-out) | More to operate |
| **Kafka / Redpanda** | High-volume event **streams**, replay, many independent consumers | Heavy to run. It's a log, not a job queue |

Questions to ask: How many jobs per second? Must enqueueing be **transactional** with the database write? Do several consumers need the same event? Do you need **replay**? Who operates it?
