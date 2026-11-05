---
slug: "deploy-cron-4"
title: "Deploy Drill: Reading cron schedules #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-10-22 06:50 UTC** (a Thursday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-06-07 23:45 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-12-12 17:30 UTC** (a Saturday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-06-28 01:00 UTC** (a Sunday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-07-09 02:15 UTC** (a Thursday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #4

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
