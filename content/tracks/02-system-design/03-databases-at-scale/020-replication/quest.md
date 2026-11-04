---
slug: "sd-replication"
title: "Replication & Read Replicas"
type: "quiz"
xp: 15
questions: [{"prompt": "Where do writes go in a primary/replica setup?", "options": ["Any node", "Only the primary", "Only replicas"], "answer": 1}, {"prompt": "A user updates their bio and immediately sees the old one. What is the likely cause?", "options": ["A browser bug", "Replication lag: the read hit a replica that had not caught up", "The write failed"], "answer": 1}, {"prompt": "Which reads are the safest to send to a replica?", "options": ["Reading your own just-saved data", "Public listing pages and analytics that tolerate a little staleness", "Checking a balance before a withdrawal"], "answer": 1}, {"prompt": "What does synchronous replication trade away?", "options": ["Consistency", "Write latency (each write waits for the replica)", "Nothing"], "answer": 1}, {"prompt": "Besides read scaling, replicas help with…", "options": ["Failover / high availability", "Making writes faster", "Schema migrations"], "answer": 0}]
---
# Replication & Read Replicas

**Replication** copies data from a **primary** (which accepts writes) to one or more **replicas** (read-only copies).

Uses:

1. **High availability**: if the primary dies, promote a replica (*failover*).
2. **Read scaling**: send read-heavy queries (search, reports, public pages) to replicas.

### Replication lag

Replicas are usually **asynchronous**: they apply changes a few milliseconds to seconds later. The classic bug:

> A user saves their profile (written to the primary), the page reloads and reads from a replica that hasn't caught up yet, so they see the **old** value and think the save failed.

Fixes for **read-your-writes** consistency:

- Read from the primary for a few seconds after that user writes.
- Route reads of "my own data" to the primary, and public or aggregate reads to replicas.

**Synchronous** replication avoids lag but makes every write wait for the replica, trading latency (and availability) for consistency.
