---
slug: "sd07-pages-27"
title: "Design Drill: Pagination maths #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2740 items**, **25** per page. How many pages are there?","options":["110","55","111","109"],"answer":0},{"prompt":"An endpoint returns **2080 items**, **100** per page. How many pages are there?","options":["20","10","21","22"],"answer":2},{"prompt":"An endpoint returns **3650 items**, **10** per page. How many pages are there?","options":["365","366","364","182"],"answer":0},{"prompt":"An endpoint returns **395 items**, **100** per page. How many pages are there?","options":["2","4","5","3"],"answer":1},{"prompt":"An endpoint returns **454 items**, **100** per page. How many pages are there?","options":["6","2","4","5"],"answer":3}]
---
# Design Drill: Pagination maths #27

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
