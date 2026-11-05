---
slug: "sd08-rpo-2"
title: "Design Drill: Backups: RPO and RTO #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You take a full backup every **48 hours**, with nothing in between. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Up to 96 hours of data","A few minutes (point-in-time recovery)","Up to 48 hours of data","Nothing: backups are instant"],"answer":2},{"prompt":"You take a full backup every **24 hours**, and continuously archive the WAL for point-in-time recovery. The database disk dies just before the next backup. What's the worst-case data loss?","options":["A few minutes (point-in-time recovery)","Nothing: backups are instant","Up to 48 hours of data","Up to 24 hours of data"],"answer":0},{"prompt":"You take a full backup every **6 hours**, with nothing in between. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Nothing: backups are instant","Up to 12 hours of data","A few minutes (point-in-time recovery)","Up to 6 hours of data"],"answer":3},{"prompt":"You take a full backup every **2 hours**, with nothing in between. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Nothing: backups are instant","A few minutes (point-in-time recovery)","Up to 4 hours of data","Up to 2 hours of data"],"answer":3},{"prompt":"You take a full backup every **6 hours**, and continuously archive the WAL for point-in-time recovery. The database disk dies just before the next backup. What's the worst-case data loss?","options":["A few minutes (point-in-time recovery)","Up to 12 hours of data","Up to 6 hours of data","Nothing: backups are instant"],"answer":0}]
---
# Design Drill: Backups: RPO and RTO #2

**RPO** (recovery point objective) is how much data you can lose: the time since the last good backup. **RTO** (recovery time objective) is how long recovery takes. Point-in-time recovery (WAL archiving) shrinks RPO to minutes.
