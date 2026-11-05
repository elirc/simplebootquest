---
slug: "sd07-pages-8"
title: "Design Drill: Pagination maths #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4280 items**, **10** per page. How many pages are there?","options":["427","214","429","428"],"answer":3},{"prompt":"An endpoint returns **671 items**, **100** per page. How many pages are there?","options":["6","8","3","7"],"answer":3},{"prompt":"An endpoint returns **1100 items**, **25** per page. How many pages are there?","options":["22","44","43","45"],"answer":1},{"prompt":"An endpoint returns **1960 items**, **20** per page. How many pages are there?","options":["97","98","99","49"],"answer":1},{"prompt":"An endpoint returns **2860 items**, **100** per page. How many pages are there?","options":["29","30","28","14"],"answer":0}]
---
# Design Drill: Pagination maths #8

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
