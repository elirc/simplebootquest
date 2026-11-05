---
slug: "deploy-cron-14"
title: "Deploy Drill: Reading cron schedules #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-08-16 23:30 UTC** (a Sunday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-03-27 13:30 UTC** (a Friday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-12-03 15:00 UTC** (a Thursday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-12-13 23:30 UTC** (a Sunday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-01-12 11:15 UTC** (a Monday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #14

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
