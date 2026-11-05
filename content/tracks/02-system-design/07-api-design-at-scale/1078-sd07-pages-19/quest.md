---
slug: "sd07-pages-19"
title: "Design Drill: Pagination maths #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **194 items**, **100** per page. How many pages are there?","options":["3","2","100","1"],"answer":1},{"prompt":"An endpoint returns **3820 items**, **25** per page. How many pages are there?","options":["152","76","154","153"],"answer":3},{"prompt":"An endpoint returns **4210 items**, **10** per page. How many pages are there?","options":["421","422","211","423"],"answer":1},{"prompt":"An endpoint returns **4860 items**, **50** per page. How many pages are there?","options":["97","49","99","98"],"answer":3},{"prompt":"An endpoint returns **4690 items**, **25** per page. How many pages are there?","options":["188","94","189","187"],"answer":0}]
---
# Design Drill: Pagination maths #19

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
