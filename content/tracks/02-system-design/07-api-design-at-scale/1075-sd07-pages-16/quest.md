---
slug: "sd07-pages-16"
title: "Design Drill: Pagination maths #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4210 items**, **100** per page. How many pages are there?","options":["21","42","43","44"],"answer":2},{"prompt":"An endpoint returns **243 items**, **25** per page. How many pages are there?","options":["11","10","9","5"],"answer":1},{"prompt":"An endpoint returns **2800 items**, **100** per page. How many pages are there?","options":["14","28","27","29"],"answer":1},{"prompt":"An endpoint returns **2500 items**, **20** per page. How many pages are there?","options":["127","125","63","126"],"answer":3},{"prompt":"An endpoint returns **3980 items**, **25** per page. How many pages are there?","options":["160","159","80","161"],"answer":0}]
---
# Design Drill: Pagination maths #16

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
