---
slug: "deploy-cron-39"
title: "Deploy Drill: Reading cron schedules #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-01-13 19:15 UTC** (a Tuesday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":3,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-01-24 07:45 UTC** (a Saturday)?","options":["Yes","Only on the first run","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-10-14 03:30 UTC** (a Wednesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-04-21 08:10 UTC** (a Tuesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-06-10 06:50 UTC** (a Wednesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #39

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
