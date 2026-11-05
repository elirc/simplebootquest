---
slug: "deploy-cron-33"
title: "Deploy Drill: Reading cron schedules #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-10-11 10:45 UTC** (a Sunday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-03-04 13:00 UTC** (a Wednesday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-08-28 18:50 UTC** (a Friday)?","options":["Only on the first run","Only if the server is in UTC+1","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-02-09 09:45 UTC** (a Monday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-10-18 03:15 UTC** (a Sunday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":3,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #33

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
