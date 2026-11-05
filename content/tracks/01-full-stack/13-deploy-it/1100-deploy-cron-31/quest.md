---
slug: "deploy-cron-31"
title: "Deploy Drill: Reading cron schedules #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-03-26 09:50 UTC** (a Thursday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-12-05 07:10 UTC** (a Saturday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-23 21:50 UTC** (a Monday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-09-20 16:15 UTC** (a Sunday)?","options":["Only on the first run","Yes","No","Only if the server is in UTC+1"],"answer":1,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-04-04 16:50 UTC** (a Saturday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #31

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
