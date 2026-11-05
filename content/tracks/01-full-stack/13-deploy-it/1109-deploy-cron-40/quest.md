---
slug: "deploy-cron-40"
title: "Deploy Drill: Reading cron schedules #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-10-08 09:00 UTC** (a Thursday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":0,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-16 09:15 UTC** (a Monday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-11-25 22:15 UTC** (a Wednesday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-09-12 18:45 UTC** (a Saturday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-09-05 10:10 UTC** (a Saturday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #40

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
