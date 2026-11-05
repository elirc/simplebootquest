---
slug: "deploy-cron-24"
title: "Deploy Drill: Reading cron schedules #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-24 10:30 UTC** (a Tuesday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-06-28 16:00 UTC** (a Sunday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-12-05 22:10 UTC** (a Saturday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-07-18 08:00 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-09-23 05:15 UTC** (a Wednesday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":3,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #24

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
