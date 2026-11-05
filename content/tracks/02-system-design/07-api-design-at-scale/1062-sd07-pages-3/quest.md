---
slug: "sd07-pages-3"
title: "Design Drill: Pagination maths #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3240 items**, **20** per page. How many pages are there?","options":["162","163","164","81"],"answer":1},{"prompt":"An endpoint returns **2120 items**, **10** per page. How many pages are there?","options":["213","212","211","106"],"answer":1},{"prompt":"An endpoint returns **830 items**, **100** per page. How many pages are there?","options":["4","8","10","9"],"answer":3},{"prompt":"An endpoint returns **130 items**, **10** per page. How many pages are there?","options":["14","7","13","10"],"answer":2},{"prompt":"An endpoint returns **1890 items**, **25** per page. How many pages are there?","options":["75","77","76","38"],"answer":2}]
---
# Design Drill: Pagination maths #3

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
