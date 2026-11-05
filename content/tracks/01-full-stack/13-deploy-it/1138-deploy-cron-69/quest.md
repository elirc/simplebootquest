---
slug: "deploy-cron-69"
title: "Deploy Drill: Reading cron schedules #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-26 17:10 UTC** (a Thursday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-08-05 12:30 UTC** (a Wednesday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-08-12 16:10 UTC** (a Wednesday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-12-22 15:10 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","Only on the first run","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-12-11 17:15 UTC** (a Friday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #69

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
