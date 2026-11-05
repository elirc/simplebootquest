---
slug: "deploy-cron-46"
title: "Deploy Drill: Reading cron schedules #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-07-13 20:50 UTC** (a Monday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-07-17 21:00 UTC** (a Friday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-01-20 02:50 UTC** (a Tuesday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-09-13 09:30 UTC** (a Sunday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-01-07 21:10 UTC** (a Wednesday)?","options":["Only on the first run","No","Yes","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #46

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
