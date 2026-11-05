---
slug: "sd07-pages-4"
title: "Design Drill: Pagination maths #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3320 items**, **10** per page. How many pages are there?","options":["333","334","332","166"],"answer":0},{"prompt":"An endpoint returns **285 items**, **25** per page. How many pages are there?","options":["6","12","13","11"],"answer":1},{"prompt":"An endpoint returns **2180 items**, **100** per page. How many pages are there?","options":["21","22","11","23"],"answer":1},{"prompt":"An endpoint returns **3750 items**, **50** per page. How many pages are there?","options":["77","75","76","38"],"answer":2},{"prompt":"An endpoint returns **456 items**, **100** per page. How many pages are there?","options":["6","4","2","5"],"answer":3}]
---
# Design Drill: Pagination maths #4

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
