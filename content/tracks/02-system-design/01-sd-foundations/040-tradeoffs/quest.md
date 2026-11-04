---
slug: "sd-tradeoffs"
title: "The Vocabulary of Trade-offs"
type: "quiz"
xp: 15
resources: [{"title": "Martin Kleppmann: Designing Data-Intensive Applications", "url": "https://dataintensive.net/"}]
questions: [{"prompt": "Why report p95/p99 latency rather than the average?", "options": ["Averages are harder to compute", "Averages hide the slow tail that real users experience", "Percentiles are always lower"], "answer": 1}, {"prompt": "During a network partition, a system that keeps serving possibly-stale data is choosing…", "options": ["Consistency", "Availability", "Durability"], "answer": 1}, {"prompt": "Which feature can most safely tolerate slightly stale data?", "options": ["An account balance before a withdrawal", "A post's like count", "Seat booking for a flight"], "answer": 1}, {"prompt": "Adding a cache to an endpoint mostly trades…", "options": ["Freshness for speed", "Security for speed", "Nothing: it is free"], "answer": 0}, {"prompt": "A good design document should…", "options": ["Present one perfect solution", "State the trade-offs it makes and the alternatives it rejected", "Avoid numbers"], "answer": 1}]
---
# The Vocabulary of Trade-offs

System design discussions use a shared vocabulary:

- **Latency**: how long one request takes. Report **percentiles** (p50, p95, p99), not averages: an average hides the slow requests your unhappiest users see.
- **Throughput**: how many requests per second the system can handle.
- **Availability**: the fraction of time the system works. 99.9% ≈ 43 minutes of downtime a month.
- **Consistency**: whether every reader sees the latest write.
- **Scalability**: how cost and effort grow as load grows.

### The CAP theorem, practically

When a network **partition** splits your system, you must choose: keep answering (**availability**, but possibly with stale data) or refuse until things heal (**consistency**). A bank balance chooses consistency, while a like counter chooses availability.

### There are no solutions, only trade-offs

Caching trades freshness for speed. Replication trades consistency for availability and read capacity. Microservices trade simplicity for independent deployability. A good design doc names what it **gives up**.
