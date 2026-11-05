---
slug: "deploy-cron-7"
title: "Deploy Drill: Reading cron schedules #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-08-26 17:15 UTC** (a Wednesday)?","options":["Only on the first run","Only if the server is in UTC+1","Yes","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-04-27 11:30 UTC** (a Monday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":2,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-01-11 05:00 UTC** (a Sunday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-11-25 22:00 UTC** (a Wednesday)?","options":["Only if the server is in UTC+1","No","Yes","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-02-09 21:00 UTC** (a Monday)?","options":["Only on the first run","No","Only if the server is in UTC+1","Yes"],"answer":3,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #7

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
