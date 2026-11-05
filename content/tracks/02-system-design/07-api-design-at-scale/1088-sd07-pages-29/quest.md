---
slug: "sd07-pages-29"
title: "Design Drill: Pagination maths #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1960 items**, **50** per page. How many pages are there?","options":["20","39","41","40"],"answer":3},{"prompt":"An endpoint returns **2640 items**, **50** per page. How many pages are there?","options":["54","26","52","53"],"answer":3},{"prompt":"An endpoint returns **1270 items**, **100** per page. How many pages are there?","options":["6","13","14","12"],"answer":1},{"prompt":"An endpoint returns **889 items**, **50** per page. How many pages are there?","options":["9","17","18","19"],"answer":2},{"prompt":"An endpoint returns **4340 items**, **100** per page. How many pages are there?","options":["22","44","45","43"],"answer":1}]
---
# Design Drill: Pagination maths #29

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
