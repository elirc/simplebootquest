---
slug: "deploy-cron-54"
title: "Deploy Drill: Reading cron schedules #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-06-23 07:45 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-06-25 12:15 UTC** (a Thursday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-12-04 01:10 UTC** (a Friday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-11-11 05:15 UTC** (a Wednesday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-12-14 00:10 UTC** (a Monday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #54

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
