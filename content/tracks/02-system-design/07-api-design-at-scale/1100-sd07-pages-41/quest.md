---
slug: "sd07-pages-41"
title: "Design Drill: Pagination maths #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3270 items**, **50** per page. How many pages are there?","options":["33","65","66","67"],"answer":2},{"prompt":"An endpoint returns **2410 items**, **50** per page. How many pages are there?","options":["24","49","48","50"],"answer":1},{"prompt":"An endpoint returns **3660 items**, **25** per page. How many pages are there?","options":["147","73","146","148"],"answer":0},{"prompt":"An endpoint returns **1830 items**, **25** per page. How many pages are there?","options":["74","37","73","25"],"answer":2},{"prompt":"An endpoint returns **2950 items**, **10** per page. How many pages are there?","options":["147","295","296","294"],"answer":1}]
---
# Design Drill: Pagination maths #41

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
