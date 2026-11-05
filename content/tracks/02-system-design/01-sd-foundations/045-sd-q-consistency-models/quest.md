---
slug: "sd-q-consistency-models"
title: "Consistency Models in Plain English"
type: "quiz"
xp: 15
resources: [{"title": "Jepsen: Consistency models", "url": "https://jepsen.io/consistency"}]
questions: [{"prompt": "A user edits their bio and the page shows the old one after reload. Which guarantee is missing?", "options": ["Monotonic reads", "Read-your-writes", "Durability"], "answer": 1}, {"prompt": "Which data is usually fine to be eventually consistent?", "options": ["Bank balances", "The like count on a post", "Seat reservations"], "answer": 1}, {"prompt": "What does CAP force you to choose during a network partition?", "options": ["Cost or performance", "Consistency or availability", "SQL or NoSQL"], "answer": 1}, {"prompt": "Reads alternate between two replicas with different lag, and a comment appears then disappears. Which property is violated?", "options": ["Monotonic reads", "Atomicity", "Isolation"], "answer": 0}, {"prompt": "A common way to give read-your-writes with replicas is…", "options": ["Never use replicas", "Route a user's reads to the primary for a short time after they write", "Increase the TTL"], "answer": 1}]
---
# Consistency Models in Plain English

When data lives in more than one place (replicas, caches, regions), you have to decide what readers are allowed to see.

- **Strong consistency**: every read sees the latest write. Simple to reason about, but it costs latency, because coordination is needed.
- **Eventual consistency**: replicas converge "soon". A read may return stale data for a moment.
- **Read-your-writes**: you always see your **own** changes, even if other people's arrive later. This is what users notice most: "I saved my profile and it reverted!"
- **Monotonic reads**: you never see data go *backwards* in time (for example, by bouncing between a fresh and a stale replica).

**CAP** says that during a network **partition**, a system must choose between consistency and availability. **PACELC** adds that even *without* partitions, you trade latency against consistency.

Most CRUD apps want strong consistency for money and inventory, and they're happy with eventual consistency for like counts, feeds and search indexes.
