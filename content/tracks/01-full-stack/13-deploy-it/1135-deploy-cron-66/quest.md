---
slug: "deploy-cron-66"
title: "Deploy Drill: Reading cron schedules #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-11-14 13:50 UTC** (a Saturday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-10-23 04:30 UTC** (a Friday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-09-05 17:00 UTC** (a Saturday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":3,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-09-08 04:15 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-03-06 07:15 UTC** (a Friday)?","options":["Only on the first run","No","Yes","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #66

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
