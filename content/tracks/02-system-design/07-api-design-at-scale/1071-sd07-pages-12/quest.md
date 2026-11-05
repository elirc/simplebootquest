---
slug: "sd07-pages-12"
title: "Design Drill: Pagination maths #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3320 items**, **100** per page. How many pages are there?","options":["34","33","17","35"],"answer":0},{"prompt":"An endpoint returns **2960 items**, **50** per page. How many pages are there?","options":["59","60","61","30"],"answer":1},{"prompt":"An endpoint returns **3190 items**, **10** per page. How many pages are there?","options":["319","159","320","318"],"answer":0},{"prompt":"An endpoint returns **125 items**, **50** per page. How many pages are there?","options":["2","3","1","4"],"answer":1},{"prompt":"An endpoint returns **2610 items**, **10** per page. How many pages are there?","options":["262","263","131","261"],"answer":0}]
---
# Design Drill: Pagination maths #12

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
