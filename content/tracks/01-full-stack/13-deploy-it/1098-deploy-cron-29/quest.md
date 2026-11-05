---
slug: "deploy-cron-29"
title: "Deploy Drill: Reading cron schedules #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-11-24 11:00 UTC** (a Tuesday)?","options":["Only on the first run","Only if the server is in UTC+1","No","Yes"],"answer":3,"explanation":"Every field matches."},{"prompt":"Does the cron schedule `0 3 * * 0` fire at **2026-06-18 20:30 UTC** (a Thursday)?","options":["No","Only on the first run","Yes","Only if the server is in UTC+1"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `*/10 9-11 * * *` fire at **2026-08-28 22:30 UTC** (a Friday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-10-26 10:00 UTC** (a Monday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-05-15 18:10 UTC** (a Friday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #29

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
