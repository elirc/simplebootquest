---
slug: "sd08-rpo-3"
title: "Design Drill: Backups: RPO and RTO #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You take a full backup every **4 hours**, with nothing in between. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Up to 4 hours of data","Nothing: backups are instant","Up to 8 hours of data","A few minutes (point-in-time recovery)"],"answer":0},{"prompt":"You take a full backup every **1 hours**, and continuously archive the WAL for point-in-time recovery. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Up to 2 hours of data","Nothing: backups are instant","A few minutes (point-in-time recovery)","Up to 1 hours of data"],"answer":2},{"prompt":"You take a full backup every **8 hours**, with nothing in between. The database disk dies just before the next backup. What's the worst-case data loss?","options":["A few minutes (point-in-time recovery)","Up to 16 hours of data","Up to 8 hours of data","Nothing: backups are instant"],"answer":2},{"prompt":"You take a full backup every **4 hours**, and continuously archive the WAL for point-in-time recovery. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Up to 8 hours of data","Nothing: backups are instant","A few minutes (point-in-time recovery)","Up to 4 hours of data"],"answer":2},{"prompt":"You take a full backup every **12 hours**, and continuously archive the WAL for point-in-time recovery. The database disk dies just before the next backup. What's the worst-case data loss?","options":["Up to 24 hours of data","Nothing: backups are instant","A few minutes (point-in-time recovery)","Up to 12 hours of data"],"answer":2}]
---
# Design Drill: Backups: RPO and RTO #3

**RPO** (recovery point objective) is how much data you can lose: the time since the last good backup. **RTO** (recovery time objective) is how long recovery takes. Point-in-time recovery (WAL archiving) shrinks RPO to minutes.
