---
slug: "sd07-pages-49"
title: "Design Drill: Pagination maths #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4900 items**, **20** per page. How many pages are there?","options":["245","247","123","246"],"answer":3},{"prompt":"An endpoint returns **1250 items**, **10** per page. How many pages are there?","options":["125","62","124","126"],"answer":0},{"prompt":"An endpoint returns **3470 items**, **10** per page. How many pages are there?","options":["347","349","348","174"],"answer":2},{"prompt":"An endpoint returns **3760 items**, **100** per page. How many pages are there?","options":["19","38","37","39"],"answer":1},{"prompt":"An endpoint returns **4590 items**, **10** per page. How many pages are there?","options":["458","229","459","460"],"answer":2}]
---
# Design Drill: Pagination maths #49

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
