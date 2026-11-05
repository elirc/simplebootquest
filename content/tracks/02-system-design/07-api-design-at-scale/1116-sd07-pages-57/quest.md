---
slug: "sd07-pages-57"
title: "Design Drill: Pagination maths #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **660 items**, **25** per page. How many pages are there?","options":["28","27","26","13"],"answer":1},{"prompt":"An endpoint returns **262 items**, **10** per page. How many pages are there?","options":["28","13","26","27"],"answer":3},{"prompt":"An endpoint returns **3680 items**, **25** per page. How many pages are there?","options":["148","147","74","149"],"answer":0},{"prompt":"An endpoint returns **743 items**, **20** per page. How many pages are there?","options":["39","19","37","38"],"answer":3},{"prompt":"An endpoint returns **2970 items**, **50** per page. How many pages are there?","options":["59","61","60","30"],"answer":2}]
---
# Design Drill: Pagination maths #57

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
