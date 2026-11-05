---
slug: "deploy-cron-42"
title: "Deploy Drill: Reading cron schedules #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-04-12 14:15 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","Only on the first run","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-07-12 13:00 UTC** (a Sunday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-06-12 01:50 UTC** (a Friday)?","options":["No","Yes","Only on the first run","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-03-08 06:10 UTC** (a Sunday)?","options":["Only on the first run","No","Yes","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-11-17 10:10 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #42

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
