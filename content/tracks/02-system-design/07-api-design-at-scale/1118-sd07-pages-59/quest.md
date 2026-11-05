---
slug: "sd07-pages-59"
title: "Design Drill: Pagination maths #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3100 items**, **20** per page. How many pages are there?","options":["155","154","156","77"],"answer":0},{"prompt":"An endpoint returns **4130 items**, **20** per page. How many pages are there?","options":["207","206","208","103"],"answer":0},{"prompt":"An endpoint returns **895 items**, **20** per page. How many pages are there?","options":["22","44","46","45"],"answer":3},{"prompt":"An endpoint returns **1040 items**, **100** per page. How many pages are there?","options":["5","12","10","11"],"answer":3},{"prompt":"An endpoint returns **2670 items**, **100** per page. How many pages are there?","options":["13","27","28","26"],"answer":1}]
---
# Design Drill: Pagination maths #59

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
