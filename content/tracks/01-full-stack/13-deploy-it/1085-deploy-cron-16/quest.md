---
slug: "deploy-cron-16"
title: "Deploy Drill: Reading cron schedules #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-01-03 01:00 UTC** (a Saturday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-08-01 20:45 UTC** (a Saturday)?","options":["Only on the first run","Yes","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-06-05 10:50 UTC** (a Friday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-07-01 22:50 UTC** (a Wednesday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 12 15 * *` fire at **2026-10-15 15:15 UTC** (a Thursday)?","options":["Yes","Only if the server is in UTC+1","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #16

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
