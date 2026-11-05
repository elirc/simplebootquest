---
slug: "sd07-pages-32"
title: "Design Drill: Pagination maths #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3360 items**, **25** per page. How many pages are there?","options":["136","135","134","67"],"answer":1},{"prompt":"An endpoint returns **871 items**, **20** per page. How many pages are there?","options":["44","22","45","43"],"answer":0},{"prompt":"An endpoint returns **2610 items**, **25** per page. How many pages are there?","options":["104","105","106","52"],"answer":1},{"prompt":"An endpoint returns **3420 items**, **10** per page. How many pages are there?","options":["171","342","10","343"],"answer":1},{"prompt":"An endpoint returns **4240 items**, **25** per page. How many pages are there?","options":["171","85","169","170"],"answer":3}]
---
# Design Drill: Pagination maths #32

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
