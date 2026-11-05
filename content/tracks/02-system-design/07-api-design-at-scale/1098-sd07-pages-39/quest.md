---
slug: "sd07-pages-39"
title: "Design Drill: Pagination maths #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3070 items**, **20** per page. How many pages are there?","options":["155","153","154","77"],"answer":2},{"prompt":"An endpoint returns **3280 items**, **100** per page. How many pages are there?","options":["16","32","33","34"],"answer":2},{"prompt":"An endpoint returns **4550 items**, **50** per page. How many pages are there?","options":["46","50","91","92"],"answer":2},{"prompt":"An endpoint returns **2350 items**, **100** per page. How many pages are there?","options":["12","23","25","24"],"answer":3},{"prompt":"An endpoint returns **3640 items**, **25** per page. How many pages are there?","options":["147","73","145","146"],"answer":3}]
---
# Design Drill: Pagination maths #39

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
