---
slug: "sd07-pages-28"
title: "Design Drill: Pagination maths #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3360 items**, **50** per page. How many pages are there?","options":["34","68","67","69"],"answer":1},{"prompt":"An endpoint returns **1620 items**, **10** per page. How many pages are there?","options":["81","10","163","162"],"answer":3},{"prompt":"An endpoint returns **2420 items**, **25** per page. How many pages are there?","options":["48","98","96","97"],"answer":3},{"prompt":"An endpoint returns **4740 items**, **20** per page. How many pages are there?","options":["236","237","118","238"],"answer":1},{"prompt":"An endpoint returns **422 items**, **20** per page. How many pages are there?","options":["21","22","23","11"],"answer":1}]
---
# Design Drill: Pagination maths #28

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
