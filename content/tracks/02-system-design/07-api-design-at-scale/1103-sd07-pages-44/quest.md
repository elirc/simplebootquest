---
slug: "sd07-pages-44"
title: "Design Drill: Pagination maths #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4960 items**, **50** per page. How many pages are there?","options":["101","100","99","50"],"answer":1},{"prompt":"An endpoint returns **3370 items**, **100** per page. How many pages are there?","options":["17","35","33","34"],"answer":3},{"prompt":"An endpoint returns **3210 items**, **50** per page. How many pages are there?","options":["66","65","64","32"],"answer":1},{"prompt":"An endpoint returns **2340 items**, **50** per page. How many pages are there?","options":["48","46","23","47"],"answer":3},{"prompt":"An endpoint returns **3890 items**, **10** per page. How many pages are there?","options":["391","195","389","390"],"answer":3}]
---
# Design Drill: Pagination maths #44

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
