---
slug: "sd-backups-dr"
title: "Backups & Disaster Recovery"
type: "quiz"
xp: 15
questions: [{"prompt": "What does RPO measure?", "options": ["How long recovery takes", "How much data (time) you can afford to lose", "Requests per operation"], "answer": 1}, {"prompt": "Why is a replica not a backup?", "options": ["Replicas are slower", "Accidental deletes and corruption are replicated too", "Replicas cannot be read"], "answer": 1}, {"prompt": "Nightly dumps give you an RPO of up to…", "options": ["5 seconds", "24 hours", "Zero"], "answer": 1}, {"prompt": "What is the most commonly skipped part of a backup strategy?", "options": ["Taking backups", "Actually testing restores", "Encrypting them"], "answer": 1}, {"prompt": "Why store backups in a separate account or region?", "options": ["It is cheaper", "A compromised credential or regional outage cannot destroy both the data and its backups", "Compliance only"], "answer": 1}]
---
# Backups & Disaster Recovery

Two numbers define your recovery plan:

- **RPO** (Recovery Point Objective): how much data you can afford to lose. "At most 5 minutes of writes."
- **RTO** (Recovery Time Objective): how long you can be down. "Back online within 1 hour."

| Technique | Typical RPO |
|-----------|-------------|
| Nightly `pg_dump` | Up to 24 h of data loss |
| Continuous WAL archiving / point-in-time recovery (PITR) | Seconds to minutes |
| A synchronous replica in another zone | ~0 |

### Things that go wrong

- Someone runs `DELETE FROM users` without a `WHERE`. Replicas faithfully copy the delete! **Replication is not a backup.**
- Backups exist, but restoring has **never been tested**, so it turns out to take 9 hours, or the files are corrupt.
- Backups are stored in the same account a compromised credential can wipe.

### Practices

Use managed PITR, **test restores regularly** (schedule a restore drill), keep backups in a separate account or region, encrypt them, and know the retention rules for deleted user data.
