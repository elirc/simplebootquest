---
slug: "deploy-cron-68"
title: "Deploy Drill: Reading cron schedules #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-08-25 15:00 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-10-16 08:50 UTC** (a Friday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-10-17 00:00 UTC** (a Saturday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-04-02 08:30 UTC** (a Thursday)?","options":["Yes","Only on the first run","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-10-19 22:00 UTC** (a Monday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #68

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
