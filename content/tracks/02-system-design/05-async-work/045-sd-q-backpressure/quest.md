---
slug: "sd-q-backpressure"
title: "Backpressure and Load Shedding"
type: "quiz"
xp: 15
questions: [{"prompt": "Jobs arrive at 100/s and workers handle 80/s, for hours. What happens to an unbounded queue?", "options": ["It stays stable", "It grows without limit and latency keeps climbing", "It empties itself"], "answer": 1}, {"prompt": "What is a good response when your API is overloaded and cannot accept more work?", "options": ["Accept it and drop it silently", "Return 429 or 503 with a Retry-After header", "Return 200"], "answer": 1}, {"prompt": "Which metric best reflects what users experience in a queue-based system?", "options": ["Number of workers", "Age of the oldest waiting job", "Disk size"], "answer": 1}, {"prompt": "During an overload, what does load shedding do?", "options": ["Adds servers", "Drops or defers low-priority work so critical paths keep working", "Restarts the database"], "answer": 1}, {"prompt": "Why limit concurrency of outbound calls to a partner API?", "options": ["To be polite only", "To avoid overwhelming it (and getting rate-limited or blocked), which would make everything fail", "It is faster"], "answer": 1}]
---
# Backpressure and Load Shedding

Queues absorb bursts, but if work arrives faster than you can process it **for a long time**, the queue grows forever. Latency climbs, memory fills, and eventually everything falls over.

**Backpressure** means pushing back on producers:
- **Bounded queues**: reject or delay new work when the queue is full, instead of accepting work you'll never finish.
- **Rate-limit producers**, or return `429 Too Many Requests` / `503 Service Unavailable` with `Retry-After`.
- **Concurrency limits** on workers and outbound calls, so you don't overload the database or a partner API.

**Load shedding** means dropping low-priority work to protect high-priority work: during an overload, skip "recommended for you" and keep checkout working.

Key metrics: **queue depth**, **job age** (how long the oldest job has waited), the processing rate versus the arrival rate, and the error rate. Job age is what users feel.
