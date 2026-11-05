---
slug: "deploy-cron-61"
title: "Deploy Drill: Reading cron schedules #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-08-27 14:10 UTC** (a Thursday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-12-10 21:50 UTC** (a Thursday)?","options":["Yes","Only on the first run","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-10-24 17:50 UTC** (a Saturday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-07-24 11:50 UTC** (a Friday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":3,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-07-27 09:15 UTC** (a Monday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #61

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
