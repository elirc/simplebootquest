---
slug: "sd07-pages-50"
title: "Design Drill: Pagination maths #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4220 items**, **20** per page. How many pages are there?","options":["211","106","20","212"],"answer":0},{"prompt":"An endpoint returns **2840 items**, **100** per page. How many pages are there?","options":["30","29","14","28"],"answer":1},{"prompt":"An endpoint returns **584 items**, **25** per page. How many pages are there?","options":["24","23","12","25"],"answer":0},{"prompt":"An endpoint returns **4010 items**, **50** per page. How many pages are there?","options":["82","80","81","40"],"answer":2},{"prompt":"An endpoint returns **453 items**, **50** per page. How many pages are there?","options":["10","9","11","5"],"answer":0}]
---
# Design Drill: Pagination maths #50

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
