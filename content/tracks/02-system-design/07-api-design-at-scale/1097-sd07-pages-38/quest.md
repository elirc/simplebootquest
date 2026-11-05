---
slug: "sd07-pages-38"
title: "Design Drill: Pagination maths #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4170 items**, **10** per page. How many pages are there?","options":["418","416","208","417"],"answer":3},{"prompt":"An endpoint returns **633 items**, **100** per page. How many pages are there?","options":["7","8","3","6"],"answer":0},{"prompt":"An endpoint returns **3410 items**, **100** per page. How many pages are there?","options":["34","35","17","36"],"answer":1},{"prompt":"An endpoint returns **102 items**, **20** per page. How many pages are there?","options":["6","3","7","5"],"answer":0},{"prompt":"An endpoint returns **705 items**, **100** per page. How many pages are there?","options":["4","8","7","9"],"answer":1}]
---
# Design Drill: Pagination maths #38

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
