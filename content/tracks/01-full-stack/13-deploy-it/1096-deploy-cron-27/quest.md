---
slug: "deploy-cron-27"
title: "Deploy Drill: Reading cron schedules #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `*/15 * * * *` fire at **2026-11-01 20:10 UTC** (a Sunday)?","options":["Yes","No","Only if the server is in UTC+1","Only on the first run"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-02-13 16:15 UTC** (a Friday)?","options":["Only if the server is in UTC+1","Yes","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-07-06 02:15 UTC** (a Monday)?","options":["Only if the server is in UTC+1","Only on the first run","No","Yes"],"answer":2,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-11-02 02:30 UTC** (a Monday)?","options":["Only on the first run","Yes","Only if the server is in UTC+1","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0,30 8-17 * * 1-5` fire at **2026-06-12 13:00 UTC** (a Friday)?","options":["Only if the server is in UTC+1","Only on the first run","Yes","No"],"answer":2,"explanation":"Every field matches."}]
---
# Deploy Drill: Reading cron schedules #27

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
