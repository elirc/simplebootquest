---
slug: "sd07-pages-58"
title: "Design Drill: Pagination maths #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2810 items**, **25** per page. How many pages are there?","options":["112","113","56","114"],"answer":1},{"prompt":"An endpoint returns **59 items**, **25** per page. How many pages are there?","options":["2","1","4","3"],"answer":3},{"prompt":"An endpoint returns **3610 items**, **100** per page. How many pages are there?","options":["37","18","36","38"],"answer":0},{"prompt":"An endpoint returns **4950 items**, **50** per page. How many pages are there?","options":["98","49","99","100"],"answer":2},{"prompt":"An endpoint returns **1910 items**, **25** per page. How many pages are there?","options":["76","78","77","38"],"answer":2}]
---
# Design Drill: Pagination maths #58

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
