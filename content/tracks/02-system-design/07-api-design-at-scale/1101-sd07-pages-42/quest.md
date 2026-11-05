---
slug: "sd07-pages-42"
title: "Design Drill: Pagination maths #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4030 items**, **20** per page. How many pages are there?","options":["202","101","201","203"],"answer":0},{"prompt":"An endpoint returns **1270 items**, **20** per page. How many pages are there?","options":["32","63","64","65"],"answer":2},{"prompt":"An endpoint returns **1700 items**, **25** per page. How many pages are there?","options":["67","69","34","68"],"answer":3},{"prompt":"An endpoint returns **448 items**, **10** per page. How many pages are there?","options":["45","44","46","22"],"answer":0},{"prompt":"An endpoint returns **3110 items**, **50** per page. How many pages are there?","options":["64","31","63","62"],"answer":2}]
---
# Design Drill: Pagination maths #42

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
