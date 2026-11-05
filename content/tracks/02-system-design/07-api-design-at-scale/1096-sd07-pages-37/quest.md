---
slug: "sd07-pages-37"
title: "Design Drill: Pagination maths #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **168 items**, **100** per page. How many pages are there?","options":["3","100","1","2"],"answer":3},{"prompt":"An endpoint returns **227 items**, **20** per page. How many pages are there?","options":["11","6","13","12"],"answer":3},{"prompt":"An endpoint returns **4150 items**, **50** per page. How many pages are there?","options":["82","84","83","41"],"answer":2},{"prompt":"An endpoint returns **4780 items**, **10** per page. How many pages are there?","options":["239","480","479","478"],"answer":2},{"prompt":"An endpoint returns **745 items**, **50** per page. How many pages are there?","options":["7","16","15","14"],"answer":2}]
---
# Design Drill: Pagination maths #37

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
