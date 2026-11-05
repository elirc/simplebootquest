---
slug: "deploy-cron-6"
title: "Deploy Drill: Reading cron schedules #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-06-10 14:50 UTC** (a Wednesday)?","options":["Yes","Only on the first run","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-04-22 17:00 UTC** (a Wednesday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-05-03 05:00 UTC** (a Sunday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-11-19 07:00 UTC** (a Thursday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-11-10 02:30 UTC** (a Tuesday)?","options":["Yes","Only on the first run","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #6

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
