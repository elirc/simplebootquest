---
slug: "react-p-grouped-list"
title: "Practice: Grouping a List by Date"
type: "code"
language: "jsx"
xp: 15
optional: true
section: "Practice"
hints: ["Sort a copy newest first. Then each item either joins the last group (same label) or starts a new one.", "Yesterday is `today` minus 86,400,000 ms, formatted with `toISOString().slice(0, 10)`."]
---
# Practice: Grouping a List by Date

Activity feeds and chat apps group items under headings: **Today**, **Yesterday**, then dates. Do the grouping in a pure function, and keep the component itself simple.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
1. `groupByDay(items, today)`: `items` have an ISO `at` timestamp (UTC) and `today` is a `'YYYY-MM-DD'` string. Return `[{ label, items }]`, newest day first, with the items in each group newest first. The label is `'Today'`, `'Yesterday'`, or the `'YYYY-MM-DD'` date.
2. `<Feed items today />` renders a `<div>` with, for each group, an `<h3>{label}</h3>` followed by a `<ul>` with one `<li key={id}>{text}</li>` per item. With no items, render `<p>No activity yet</p>` instead.
