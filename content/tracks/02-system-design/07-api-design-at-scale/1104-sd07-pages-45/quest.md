---
slug: "sd07-pages-45"
title: "Design Drill: Pagination maths #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4300 items**, **50** per page. How many pages are there?","options":["87","85","86","43"],"answer":2},{"prompt":"An endpoint returns **1230 items**, **100** per page. How many pages are there?","options":["14","12","13","6"],"answer":2},{"prompt":"An endpoint returns **1700 items**, **100** per page. How many pages are there?","options":["18","17","9","19"],"answer":0},{"prompt":"An endpoint returns **3170 items**, **50** per page. How many pages are there?","options":["32","65","63","64"],"answer":3},{"prompt":"An endpoint returns **1930 items**, **20** per page. How many pages are there?","options":["98","96","97","48"],"answer":2}]
---
# Design Drill: Pagination maths #45

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
