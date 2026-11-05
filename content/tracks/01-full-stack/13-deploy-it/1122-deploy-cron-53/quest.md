---
slug: "deploy-cron-53"
title: "Deploy Drill: Reading cron schedules #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-10-20 20:10 UTC** (a Tuesday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-10-27 23:10 UTC** (a Tuesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-10-12 05:30 UTC** (a Monday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-04-03 08:30 UTC** (a Friday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-03-01 19:50 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #53

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
