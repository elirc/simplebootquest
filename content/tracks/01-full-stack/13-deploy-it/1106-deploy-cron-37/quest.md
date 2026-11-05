---
slug: "deploy-cron-37"
title: "Deploy Drill: Reading cron schedules #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-01-16 07:30 UTC** (a Friday)?","options":["No","Yes","Only if the server is in UTC+1","Only on the first run"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-04-04 01:30 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-03-26 21:10 UTC** (a Thursday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-08-01 10:00 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-12-09 02:30 UTC** (a Wednesday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":0,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #37

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
