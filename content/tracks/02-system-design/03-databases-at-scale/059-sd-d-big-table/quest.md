---
slug: "sd-d-big-table"
title: "Design Doc: Taming a 500M-Row Table"
type: "design"
xp: 40
rubric: ["Explains the cause of each symptom", "Proposes a composite index matching the activity query", "Uses time-based partitioning, or a similar approach, for retention", "Moves old data to cheaper storage while meeting the compliance requirement", "Moves analytics off the primary (a replica or warehouse)", "Describes a zero-downtime rollout (CONCURRENTLY, backfill in batches, etc.)", "Says how success will be measured"]
minWords: 150
---
# Design Doc: Taming a 500M-Row Table

Your app logs every user action in an `events` table (id, user_id, type, payload JSONB, created_at). It's now **500 million rows** and grows by 2 million a day. Problems:
- The user's "activity" page (latest 50 events) takes 3 seconds.
- Nightly analytics queries slow down the whole app.
- The disk is 85% full.
- Nobody reads events older than 90 days, except for compliance (kept for 2 years).

Write a plan to fix it without downtime.

### What to include
1. **Diagnosis**: why each symptom happens.
2. **Indexing** for the activity page.
3. **Partitioning and retention**: how old data stops slowing things down.
4. **Separating analytics** from the production workload.
5. **Rollout steps** that avoid downtime, and how you'll verify each one.
