---
slug: "sd-q-replica-lag"
title: "Read Replicas and Replication Lag"
type: "quiz"
xp: 15
resources: [{"title": "PostgreSQL: High availability and replication", "url": "https://www.postgresql.org/docs/current/high-availability.html"}]
questions: [{"prompt": "A user creates a todo, is redirected to the list, and the todo is missing. Most likely cause?", "options": ["A bug in React", "The list was read from a replica that had not yet received the write", "The write failed"], "answer": 1}, {"prompt": "Your primary is overloaded by writes. Will adding read replicas help?", "options": ["Yes, a lot", "No: replicas offload reads, and each replica still applies every write"], "answer": 1}, {"prompt": "Which read should go to the primary?", "options": ["A public leaderboard", "Checking stock before confirming an order", "An analytics dashboard"], "answer": 1}, {"prompt": "What is a sensible safeguard for replicas?", "options": ["Never monitor them", "Monitor replication lag and remove lagging replicas from the read pool", "Disable the primary"], "answer": 1}, {"prompt": "Replicas typically replicate…", "options": ["Synchronously, always", "Asynchronously by default, so a small delay is normal"], "answer": 1}]
---
# Read Replicas and Replication Lag

A **read replica** is a copy of the primary database that receives changes asynchronously. Reads can go to replicas, so the primary handles only writes and the reads that must be fresh.

The catch is **replication lag**: a replica is usually milliseconds behind, but under heavy write load or during a long-running query it can fall seconds or minutes behind.

Patterns that keep users happy:
- **Read-your-writes**: after a user writes, read from the primary for that user for a few seconds (or until the replica has caught up to the write's log position).
- **Critical reads go to the primary**: checkout, balance checks, "does this username exist?"
- **Monitor lag**, and stop sending traffic to a replica that's too far behind.
- Don't use replicas to fix a **write** bottleneck. Every replica still applies every write.

In Prisma, the `@prisma/extension-read-replicas` extension routes reads to replicas and lets you force the primary with `$primary()`.
