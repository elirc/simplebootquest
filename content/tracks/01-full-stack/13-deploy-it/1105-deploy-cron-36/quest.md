---
slug: "deploy-cron-36"
title: "Deploy Drill: Reading cron schedules #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-06-14 11:00 UTC** (a Sunday)?","options":["Only on the first run","Yes","No","Only if the server is in UTC+1"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-05-22 20:45 UTC** (a Friday)?","options":["Only if the server is in UTC+1","Yes","No","Only on the first run"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-07-04 11:10 UTC** (a Saturday)?","options":["Yes","Only on the first run","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-03-28 20:00 UTC** (a Saturday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-11-16 18:10 UTC** (a Monday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #36

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
