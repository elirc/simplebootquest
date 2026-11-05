---
slug: "sd07-pages-56"
title: "Design Drill: Pagination maths #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3250 items**, **25** per page. How many pages are there?","options":["131","130","129","65"],"answer":1},{"prompt":"An endpoint returns **4760 items**, **50** per page. How many pages are there?","options":["48","97","96","95"],"answer":2},{"prompt":"An endpoint returns **2840 items**, **50** per page. How many pages are there?","options":["28","58","57","56"],"answer":2},{"prompt":"An endpoint returns **4970 items**, **10** per page. How many pages are there?","options":["497","496","498","248"],"answer":0},{"prompt":"An endpoint returns **1010 items**, **100** per page. How many pages are there?","options":["11","5","10","12"],"answer":0}]
---
# Design Drill: Pagination maths #56

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
