---
slug: "sd07-pages-1"
title: "Design Drill: Pagination maths #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4180 items**, **25** per page. How many pages are there?","options":["84","167","25","168"],"answer":1},{"prompt":"An endpoint returns **1010 items**, **25** per page. How many pages are there?","options":["20","40","41","42"],"answer":2},{"prompt":"An endpoint returns **3650 items**, **20** per page. How many pages are there?","options":["91","183","184","182"],"answer":1},{"prompt":"An endpoint returns **805 items**, **20** per page. How many pages are there?","options":["42","41","40","20"],"answer":1},{"prompt":"An endpoint returns **575 items**, **100** per page. How many pages are there?","options":["6","5","3","7"],"answer":0}]
---
# Design Drill: Pagination maths #1

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
