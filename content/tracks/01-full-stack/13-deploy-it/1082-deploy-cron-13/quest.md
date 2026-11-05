---
slug: "deploy-cron-13"
title: "Deploy Drill: Reading cron schedules #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-02-25 06:45 UTC** (a Wednesday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-09-15 00:30 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-08-13 23:30 UTC** (a Thursday)?","options":["Only on the first run","Only if the server is in UTC+1","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-04-11 07:00 UTC** (a Saturday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":0,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-11-26 09:10 UTC** (a Thursday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #13

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
