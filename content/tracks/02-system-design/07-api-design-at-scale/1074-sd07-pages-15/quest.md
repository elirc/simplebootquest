---
slug: "sd07-pages-15"
title: "Design Drill: Pagination maths #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3800 items**, **10** per page. How many pages are there?","options":["190","379","381","380"],"answer":3},{"prompt":"An endpoint returns **878 items**, **25** per page. How many pages are there?","options":["18","37","35","36"],"answer":3},{"prompt":"An endpoint returns **4940 items**, **10** per page. How many pages are there?","options":["495","494","493","247"],"answer":1},{"prompt":"An endpoint returns **2140 items**, **100** per page. How many pages are there?","options":["11","23","21","22"],"answer":3},{"prompt":"An endpoint returns **2850 items**, **25** per page. How many pages are there?","options":["57","115","114","113"],"answer":2}]
---
# Design Drill: Pagination maths #15

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
