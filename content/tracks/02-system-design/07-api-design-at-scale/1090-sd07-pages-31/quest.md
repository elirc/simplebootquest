---
slug: "sd07-pages-31"
title: "Design Drill: Pagination maths #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1170 items**, **100** per page. How many pages are there?","options":["6","11","13","12"],"answer":3},{"prompt":"An endpoint returns **1090 items**, **25** per page. How many pages are there?","options":["43","44","45","22"],"answer":1},{"prompt":"An endpoint returns **1430 items**, **20** per page. How many pages are there?","options":["71","72","36","73"],"answer":1},{"prompt":"An endpoint returns **1770 items**, **50** per page. How many pages are there?","options":["37","35","18","36"],"answer":3},{"prompt":"An endpoint returns **3570 items**, **10** per page. How many pages are there?","options":["358","356","357","178"],"answer":2}]
---
# Design Drill: Pagination maths #31

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
