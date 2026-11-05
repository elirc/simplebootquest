---
slug: "deploy-cron-30"
title: "Deploy Drill: Reading cron schedules #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-02-09 18:10 UTC** (a Monday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-11-13 03:15 UTC** (a Friday)?","options":["Only on the first run","No","Yes","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-01-10 06:50 UTC** (a Saturday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-12-27 01:15 UTC** (a Sunday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-03-16 16:50 UTC** (a Monday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #30

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
