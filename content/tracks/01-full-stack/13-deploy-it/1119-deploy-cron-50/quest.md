---
slug: "deploy-cron-50"
title: "Deploy Drill: Reading cron schedules #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-08-09 17:15 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-04-08 20:45 UTC** (a Wednesday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-07-23 03:30 UTC** (a Thursday)?","options":["Only on the first run","Only if the server is in UTC+1","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-08-06 19:00 UTC** (a Thursday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-04-06 00:50 UTC** (a Monday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #50

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
