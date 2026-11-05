---
slug: "deploy-cron-26"
title: "Deploy Drill: Reading cron schedules #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-12-27 20:45 UTC** (a Sunday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-01-01 01:10 UTC** (a Thursday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-11-18 23:00 UTC** (a Wednesday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":0,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-05-23 16:50 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-05-09 04:30 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #26

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
