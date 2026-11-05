---
slug: "sd07-pages-21"
title: "Design Drill: Pagination maths #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3270 items**, **10** per page. How many pages are there?","options":["164","329","328","327"],"answer":2},{"prompt":"An endpoint returns **230 items**, **100** per page. How many pages are there?","options":["4","2","1","3"],"answer":3},{"prompt":"An endpoint returns **4790 items**, **100** per page. How many pages are there?","options":["47","49","24","48"],"answer":3},{"prompt":"An endpoint returns **690 items**, **100** per page. How many pages are there?","options":["6","8","7","3"],"answer":2},{"prompt":"An endpoint returns **4800 items**, **100** per page. How many pages are there?","options":["50","48","49","24"],"answer":2}]
---
# Design Drill: Pagination maths #21

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
