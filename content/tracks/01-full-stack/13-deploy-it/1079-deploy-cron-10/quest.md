---
slug: "deploy-cron-10"
title: "Deploy Drill: Reading cron schedules #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-06-21 18:00 UTC** (a Sunday)?","options":["Only on the first run","No","Yes","Only if the server is in UTC+1"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-01-13 03:10 UTC** (a Tuesday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-04-14 03:50 UTC** (a Tuesday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-12-17 21:15 UTC** (a Thursday)?","options":["Only on the first run","Yes","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-11-08 17:00 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #10

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
