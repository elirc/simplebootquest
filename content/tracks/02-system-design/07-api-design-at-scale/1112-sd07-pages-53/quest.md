---
slug: "sd07-pages-53"
title: "Design Drill: Pagination maths #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2210 items**, **50** per page. How many pages are there?","options":["45","44","22","46"],"answer":0},{"prompt":"An endpoint returns **807 items**, **100** per page. How many pages are there?","options":["9","10","8","4"],"answer":0},{"prompt":"An endpoint returns **2440 items**, **25** per page. How many pages are there?","options":["97","49","99","98"],"answer":3},{"prompt":"An endpoint returns **1220 items**, **20** per page. How many pages are there?","options":["20","62","61","31"],"answer":2},{"prompt":"An endpoint returns **4560 items**, **50** per page. How many pages are there?","options":["91","46","93","92"],"answer":3}]
---
# Design Drill: Pagination maths #53

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
