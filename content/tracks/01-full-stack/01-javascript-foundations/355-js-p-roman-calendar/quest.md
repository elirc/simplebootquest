---
slug: "js-p-roman-calendar"
title: "Practice: Week Numbers & Weekdays"
type: "code"
language: "js"
xp: 15
hints: ["Work in UTC so local time zones can't shift the day."]
---
## Your task
1. `weekdayName(iso)` returns `"Monday"`…`"Sunday"` for a `"YYYY-MM-DD"` date (in UTC).
2. `nextWeekday(iso)` returns the next date that's a weekday (Mon–Fri), as `"YYYY-MM-DD"`. From Friday it's Monday, and from Saturday it's also Monday.
3. `businessDaysBetween(startIso, endIso)` counts the weekdays from `start` (inclusive) to `end` (exclusive).
