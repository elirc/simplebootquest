---
slug: "sd07-pages-18"
title: "Design Drill: Pagination maths #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3860 items**, **100** per page. How many pages are there?","options":["19","39","38","40"],"answer":1},{"prompt":"An endpoint returns **2820 items**, **10** per page. How many pages are there?","options":["283","282","284","141"],"answer":0},{"prompt":"An endpoint returns **1910 items**, **100** per page. How many pages are there?","options":["19","20","10","21"],"answer":1},{"prompt":"An endpoint returns **515 items**, **20** per page. How many pages are there?","options":["27","13","25","26"],"answer":3},{"prompt":"An endpoint returns **751 items**, **10** per page. How many pages are there?","options":["77","76","38","75"],"answer":1}]
---
# Design Drill: Pagination maths #18

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
