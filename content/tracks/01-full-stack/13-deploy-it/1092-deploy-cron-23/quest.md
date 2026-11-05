---
slug: "deploy-cron-23"
title: "Deploy Drill: Reading cron schedules #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-09-16 21:15 UTC** (a Wednesday)?","options":["Yes","Only on the first run","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-08-21 20:50 UTC** (a Friday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-02-08 15:00 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-10-28 07:00 UTC** (a Wednesday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-09-16 05:15 UTC** (a Wednesday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":1,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #23

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
