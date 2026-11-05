---
slug: "sd07-pages-14"
title: "Design Drill: Pagination maths #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1090 items**, **20** per page. How many pages are there?","options":["56","27","55","54"],"answer":2},{"prompt":"An endpoint returns **3510 items**, **20** per page. How many pages are there?","options":["177","176","175","88"],"answer":1},{"prompt":"An endpoint returns **3430 items**, **25** per page. How many pages are there?","options":["69","137","139","138"],"answer":3},{"prompt":"An endpoint returns **1300 items**, **100** per page. How many pages are there?","options":["12","13","6","14"],"answer":1},{"prompt":"An endpoint returns **4200 items**, **25** per page. How many pages are there?","options":["167","168","169","84"],"answer":1}]
---
# Design Drill: Pagination maths #14

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
