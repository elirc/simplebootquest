---
slug: "sd-d-leaderboard"
title: "Design Doc: A Cached Leaderboard"
type: "design"
xp: 40
rubric: ["States a freshness requirement (how stale is acceptable)", "Uses a structure suited to ranking (e.g. a Redis sorted set) or a precomputed table", "Explains how scores are updated as XP events arrive", "Explains how a user's own rank is found efficiently", "Handles the weekly reset", "Explains how to rebuild the leaderboard from the source of truth", "Discusses at least one alternative and why it was rejected"]
minWords: 150
---
# Design Doc: A Cached Leaderboard

Your learning platform wants a **weekly XP leaderboard**: the top 100 learners this week, plus "your rank" for the signed-in user. There are 200,000 learners, XP events arrive at ~50/s at peak, and the leaderboard page is viewed ~200 times per second at peak. The naive query (`SUM(xp) GROUP BY user ORDER BY ... LIMIT 100`) over this week's events takes 2 seconds.

Design how to serve it.

### What to include
1. **Requirements**: freshness (how stale can it be?), accuracy, and the weekly reset.
2. **Data structure and storage**: where the scores live and how they're updated.
3. **Reading** the top 100 and a user's own rank.
4. **Failure and recovery**: what happens if the cache is lost.
5. **Trade-offs** you considered.
