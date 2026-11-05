---
slug: "sd07-pages-23"
title: "Design Drill: Pagination maths #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4300 items**, **100** per page. How many pages are there?","options":["43","22","44","45"],"answer":2},{"prompt":"An endpoint returns **2740 items**, **100** per page. How many pages are there?","options":["29","27","28","14"],"answer":2},{"prompt":"An endpoint returns **1160 items**, **50** per page. How many pages are there?","options":["23","25","24","12"],"answer":2},{"prompt":"An endpoint returns **3830 items**, **25** per page. How many pages are there?","options":["154","155","77","153"],"answer":0},{"prompt":"An endpoint returns **704 items**, **20** per page. How many pages are there?","options":["36","35","37","18"],"answer":0}]
---
# Design Drill: Pagination maths #23

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
