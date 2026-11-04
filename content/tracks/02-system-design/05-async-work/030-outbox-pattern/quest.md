---
slug: "sd-outbox-pattern"
title: "The Dual-Write Problem & the Outbox Pattern"
type: "quiz"
xp: 15
resources: [{"title": "microservices.io: Transactional outbox", "url": "https://microservices.io/patterns/data/transactional-outbox.html"}]
questions: [{"prompt": "What is the dual-write problem?", "options": ["Writing the same row twice", "Writing to two systems (DB + queue) non-atomically, so a crash leaves them inconsistent", "Two users editing at once"], "answer": 1}, {"prompt": "How does the outbox pattern solve it?", "options": ["By using a faster queue", "By writing the event to the database in the same transaction, and relaying it later", "By retrying the HTTP request"], "answer": 1}, {"prompt": "After the relay publishes an outbox event, what must consumers still handle?", "options": ["Nothing", "Possible duplicates (at-least-once delivery)", "Out-of-memory errors"], "answer": 1}, {"prompt": "Why do Postgres-backed queues make this simpler?", "options": ["They are faster", "Enqueuing can happen inside the same database transaction as the business data", "They don't need workers"], "answer": 1}, {"prompt": "Enqueuing before committing the transaction risks…", "options": ["Nothing", "A worker processing an order that is then rolled back and never existed", "Slower commits"], "answer": 1}]
---
# The Dual-Write Problem & the Outbox Pattern

A classic bug:

```ts
await db.order.create({ data });              // 1. write to the database
await queue.add('send-confirmation', { id }); // 2. enqueue a job
```

If the process crashes between 1 and 2, the order exists but **no confirmation is ever sent**. Swap the order and you can send a confirmation for an order that was never saved. You can't atomically write to two different systems.

### The transactional outbox

Write the event **to the database, in the same transaction** as the data:

```ts
await db.$transaction([
  db.order.create({ data }),
  db.outbox.create({ data: { type: 'order.created', payload: { id } } }),
]);
```

A separate relay process reads unsent outbox rows, publishes them to the queue, and marks them sent. Both writes succeed or fail together, and the relay retries until delivery. (Delivery is at-least-once, so consumers must be idempotent!)

If your queue *is* Postgres (pg-boss, Graphile Worker), you can enqueue inside the transaction directly, which gives you the same guarantee for free.
