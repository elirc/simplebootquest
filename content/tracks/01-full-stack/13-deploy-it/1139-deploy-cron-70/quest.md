---
slug: "deploy-cron-70"
title: "Deploy Drill: Reading cron schedules #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-03-19 15:00 UTC** (a Thursday)?","options":["Yes","Only on the first run","Only if the server is in UTC+1","No"],"answer":0,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-03-19 08:10 UTC** (a Thursday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-01-05 06:00 UTC** (a Monday)?","options":["No","Yes","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-12-08 23:30 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-05-22 10:15 UTC** (a Friday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #70

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
