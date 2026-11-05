---
slug: "sd07-pages-30"
title: "Design Drill: Pagination maths #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2150 items**, **100** per page. How many pages are there?","options":["23","22","21","11"],"answer":1},{"prompt":"An endpoint returns **2120 items**, **25** per page. How many pages are there?","options":["42","85","84","86"],"answer":1},{"prompt":"An endpoint returns **4860 items**, **20** per page. How many pages are there?","options":["244","242","121","243"],"answer":3},{"prompt":"An endpoint returns **717 items**, **25** per page. How many pages are there?","options":["30","14","29","28"],"answer":2},{"prompt":"An endpoint returns **3420 items**, **50** per page. How many pages are there?","options":["34","70","69","68"],"answer":2}]
---
# Design Drill: Pagination maths #30

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
