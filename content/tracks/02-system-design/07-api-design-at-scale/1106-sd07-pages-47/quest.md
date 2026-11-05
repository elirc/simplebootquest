---
slug: "sd07-pages-47"
title: "Design Drill: Pagination maths #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3640 items**, **10** per page. How many pages are there?","options":["363","365","364","182"],"answer":2},{"prompt":"An endpoint returns **2370 items**, **20** per page. How many pages are there?","options":["118","59","119","120"],"answer":2},{"prompt":"An endpoint returns **1970 items**, **10** per page. How many pages are there?","options":["196","198","197","98"],"answer":2},{"prompt":"An endpoint returns **506 items**, **20** per page. How many pages are there?","options":["13","27","26","25"],"answer":2},{"prompt":"An endpoint returns **1480 items**, **100** per page. How many pages are there?","options":["14","15","16","7"],"answer":1}]
---
# Design Drill: Pagination maths #47

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
