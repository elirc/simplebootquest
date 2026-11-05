---
slug: "sd07-pages-33"
title: "Design Drill: Pagination maths #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2430 items**, **25** per page. How many pages are there?","options":["49","97","99","98"],"answer":3},{"prompt":"An endpoint returns **2210 items**, **25** per page. How many pages are there?","options":["89","44","90","88"],"answer":0},{"prompt":"An endpoint returns **2480 items**, **20** per page. How many pages are there?","options":["124","125","62","123"],"answer":0},{"prompt":"An endpoint returns **4900 items**, **10** per page. How many pages are there?","options":["490","491","492","245"],"answer":1},{"prompt":"An endpoint returns **1230 items**, **20** per page. How many pages are there?","options":["61","62","31","63"],"answer":1}]
---
# Design Drill: Pagination maths #33

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
