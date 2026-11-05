---
slug: "deploy-cron-18"
title: "Deploy Drill: Reading cron schedules #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-03-27 23:45 UTC** (a Friday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-01-06 07:45 UTC** (a Tuesday)?","options":["Only on the first run","Yes","No","Only if the server is in UTC+1"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-01-09 13:00 UTC** (a Friday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-11-21 21:00 UTC** (a Saturday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-12-01 00:00 UTC** (a Tuesday)?","options":["No","Yes","Only if the server is in UTC+1","Only on the first run"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #18

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
