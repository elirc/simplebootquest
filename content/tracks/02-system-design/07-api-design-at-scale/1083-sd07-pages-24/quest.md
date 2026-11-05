---
slug: "sd07-pages-24"
title: "Design Drill: Pagination maths #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3550 items**, **20** per page. How many pages are there?","options":["178","177","179","89"],"answer":0},{"prompt":"An endpoint returns **3050 items**, **20** per page. How many pages are there?","options":["152","154","76","153"],"answer":3},{"prompt":"An endpoint returns **2580 items**, **10** per page. How many pages are there?","options":["129","258","10","259"],"answer":1},{"prompt":"An endpoint returns **4590 items**, **20** per page. How many pages are there?","options":["230","229","231","115"],"answer":0},{"prompt":"An endpoint returns **1850 items**, **50** per page. How many pages are there?","options":["38","39","37","19"],"answer":0}]
---
# Design Drill: Pagination maths #24

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
