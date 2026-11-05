---
slug: "deploy-cron-41"
title: "Deploy Drill: Reading cron schedules #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-08-04 13:30 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-03-20 01:30 UTC** (a Friday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-02-08 11:00 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-07-27 07:30 UTC** (a Monday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":0,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-10-22 14:50 UTC** (a Thursday)?","options":["Yes","Only on the first run","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #41

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
