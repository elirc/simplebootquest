---
slug: "deploy-cron-8"
title: "Deploy Drill: Reading cron schedules #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-06-20 11:15 UTC** (a Saturday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-07-21 13:00 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","Only on the first run","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-04 19:50 UTC** (a Wednesday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-09-15 16:50 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-03-08 04:15 UTC** (a Sunday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #8

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
