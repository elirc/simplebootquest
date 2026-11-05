---
slug: "sd07-pages-51"
title: "Design Drill: Pagination maths #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **457 items**, **100** per page. How many pages are there?","options":["2","5","4","6"],"answer":1},{"prompt":"An endpoint returns **4260 items**, **100** per page. How many pages are there?","options":["42","21","43","44"],"answer":2},{"prompt":"An endpoint returns **311 items**, **10** per page. How many pages are there?","options":["32","16","33","31"],"answer":0},{"prompt":"An endpoint returns **4730 items**, **25** per page. How many pages are there?","options":["189","191","95","190"],"answer":3},{"prompt":"An endpoint returns **1270 items**, **10** per page. How many pages are there?","options":["128","64","129","127"],"answer":0}]
---
# Design Drill: Pagination maths #51

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
