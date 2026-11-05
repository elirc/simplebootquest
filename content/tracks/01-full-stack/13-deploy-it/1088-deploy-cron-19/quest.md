---
slug: "deploy-cron-19"
title: "Deploy Drill: Reading cron schedules #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"Does the cron schedule `45 23 * * 5` fire at **2026-07-24 11:10 UTC** (a Friday)?","options":["Yes","Only if the server is in UTC+1","Only on the first run","No"],"answer":3,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 9 * * 1-5` fire at **2026-02-03 11:15 UTC** (a Tuesday)?","options":["Yes","No","Only on the first run","Only if the server is in UTC+1"],"answer":1,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 0 1 * *` fire at **2026-09-25 00:15 UTC** (a Friday)?","options":["No","Only if the server is in UTC+1","Yes","Only on the first run"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `30 2 * * *` fire at **2026-12-10 11:50 UTC** (a Thursday)?","options":["No","Only on the first run","Only if the server is in UTC+1","Yes"],"answer":0,"explanation":"At least one field does not match."},{"prompt":"Does the cron schedule `0 */6 * * *` fire at **2026-10-06 10:45 UTC** (a Tuesday)?","options":["Only if the server is in UTC+1","Only on the first run","Yes","No"],"answer":3,"explanation":"At least one field does not match."}]
---
# Deploy Drill: Reading cron schedules #19

Cron fields are: **minute hour day-of-month month day-of-week** (0 = Sunday). `*` means every value, `*/15` means every 15, `1-5` is a range, and `0,30` is a list. Most schedulers use **UTC** unless you configure a time zone.
