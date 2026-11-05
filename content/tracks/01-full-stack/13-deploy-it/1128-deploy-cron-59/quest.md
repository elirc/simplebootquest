---
slug: "deploy-cron-59"
title: "Deploy Drill: Reading cron schedules #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-07-28 02:45 UTC** (a Tuesday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-10 18:50 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","No","Only on the first run","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-03-23 22:15 UTC** (a Monday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-09-09 07:00 UTC** (a Wednesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-09-15 18:45 UTC** (a Tuesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #59

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
