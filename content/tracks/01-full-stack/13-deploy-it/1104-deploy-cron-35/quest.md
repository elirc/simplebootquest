---
slug: "deploy-cron-35"
title: "Deploy Drill: Reading cron schedules #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-04-26 02:15 UTC** (a Sunday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-08-23 00:30 UTC** (a Sunday)?","options":["Yes","Only on the first run","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-03-04 13:10 UTC** (a Wednesday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-12-27 00:00 UTC** (a Sunday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-02-02 17:15 UTC** (a Monday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #35

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
