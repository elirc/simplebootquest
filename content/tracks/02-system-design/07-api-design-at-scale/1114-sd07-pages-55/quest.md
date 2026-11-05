---
slug: "sd07-pages-55"
title: "Design Drill: Pagination maths #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1480 items**, **25** per page. How many pages are there?","options":["25","59","60","30"],"answer":1},{"prompt":"An endpoint returns **630 items**, **20** per page. How many pages are there?","options":["33","31","16","32"],"answer":3},{"prompt":"An endpoint returns **2680 items**, **50** per page. How many pages are there?","options":["27","54","53","55"],"answer":1},{"prompt":"An endpoint returns **172 items**, **25** per page. How many pages are there?","options":["7","3","6","8"],"answer":0},{"prompt":"An endpoint returns **4420 items**, **20** per page. How many pages are there?","options":["222","221","223","111"],"answer":0}]
---
# Design Drill: Pagination maths #55

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
