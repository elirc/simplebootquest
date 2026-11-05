---
slug: "deploy-cron-34"
title: "Deploy Drill: Reading cron schedules #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-03-10 17:50 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-06-20 03:15 UTC** (a Saturday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-08-14 10:50 UTC** (a Friday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-03-03 06:15 UTC** (a Tuesday)?","options":["No","Only if the server is in UTC+1","Only on the first run","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-02-15 12:00 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #34

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
