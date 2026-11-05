---
slug: "sd-d-postmortem"
title: "Design Doc: Write a Blameless Postmortem"
type: "design"
xp: 40
hints: ["Blameless means asking \"why did the system allow this?\" instead of \"who did this?\"."]
rubric: ["Summarises user impact with duration and severity", "Gives a timeline with timestamps", "Identifies the root cause (an unindexed query exhausting the pool)", "Lists contributing factors (no load test, migration coupled to the deploy, slow alerting)", "Is blameless: it focuses on systems and process, not individuals", "Has specific action items with owners and priorities"]
minWords: 150
---
# Design Doc: Write a Blameless Postmortem

Here's an incident. Write the postmortem.

> **Tuesday 14:05–14:52 UTC.** After a deploy at 14:00, the API's p95 latency rose from 150 ms to 8 s, and 30% of requests failed with 504s. The on-call engineer was paged at 14:12 (the alert fires after 5 minutes above threshold, plus a 2-minute delay). At 14:30 they noticed many "connection pool timeout" errors. The deploy had added an "activity feed" query to the dashboard endpoint, `SELECT ... FROM events WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`. There's no index on `events.user_id`, and the table has 40M rows. Rolling back was delayed because the deploy also ran a migration, and nobody was sure it was safe to roll back. Rollback finished at 14:52.

### What to include
1. **Summary**: impact (who, how long, how bad).
2. **Timeline**, with times.
3. **Root cause and contributing factors**: think about systems, not people.
4. **What went well and what didn't.**
5. **Action items**: specific, each with an owner and a priority.
