---
slug: "sd07-pages-10"
title: "Design Drill: Pagination maths #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4450 items**, **50** per page. How many pages are there?","options":["91","89","90","45"],"answer":2},{"prompt":"An endpoint returns **483 items**, **50** per page. How many pages are there?","options":["10","9","11","5"],"answer":0},{"prompt":"An endpoint returns **1640 items**, **50** per page. How many pages are there?","options":["32","33","16","34"],"answer":1},{"prompt":"An endpoint returns **3280 items**, **20** per page. How many pages are there?","options":["82","164","163","165"],"answer":1},{"prompt":"An endpoint returns **2380 items**, **10** per page. How many pages are there?","options":["239","119","238","237"],"answer":2}]
---
# Design Drill: Pagination maths #10

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
