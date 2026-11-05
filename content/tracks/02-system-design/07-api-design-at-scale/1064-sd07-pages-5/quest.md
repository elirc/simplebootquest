---
slug: "sd07-pages-5"
title: "Design Drill: Pagination maths #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3290 items**, **25** per page. How many pages are there?","options":["133","132","66","131"],"answer":1},{"prompt":"An endpoint returns **1340 items**, **100** per page. How many pages are there?","options":["14","13","7","15"],"answer":0},{"prompt":"An endpoint returns **2120 items**, **50** per page. How many pages are there?","options":["42","21","44","43"],"answer":3},{"prompt":"An endpoint returns **83 items**, **25** per page. How many pages are there?","options":["4","3","2","5"],"answer":0},{"prompt":"An endpoint returns **546 items**, **10** per page. How many pages are there?","options":["55","54","27","56"],"answer":0}]
---
# Design Drill: Pagination maths #5

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
