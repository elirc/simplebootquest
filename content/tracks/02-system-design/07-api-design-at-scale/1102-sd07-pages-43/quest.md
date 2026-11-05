---
slug: "sd07-pages-43"
title: "Design Drill: Pagination maths #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2000 items**, **25** per page. How many pages are there?","options":["40","81","25","80"],"answer":3},{"prompt":"An endpoint returns **3520 items**, **50** per page. How many pages are there?","options":["72","70","71","35"],"answer":2},{"prompt":"An endpoint returns **2210 items**, **20** per page. How many pages are there?","options":["110","112","111","55"],"answer":2},{"prompt":"An endpoint returns **404 items**, **20** per page. How many pages are there?","options":["22","10","21","20"],"answer":2},{"prompt":"An endpoint returns **2910 items**, **20** per page. How many pages are there?","options":["146","145","147","73"],"answer":0}]
---
# Design Drill: Pagination maths #43

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
