---
slug: "sd07-pages-60"
title: "Design Drill: Pagination maths #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1060 items**, **25** per page. How many pages are there?","options":["43","44","42","21"],"answer":0},{"prompt":"An endpoint returns **3190 items**, **20** per page. How many pages are there?","options":["161","80","160","159"],"answer":2},{"prompt":"An endpoint returns **2160 items**, **50** per page. How many pages are there?","options":["44","22","45","43"],"answer":0},{"prompt":"An endpoint returns **1580 items**, **10** per page. How many pages are there?","options":["157","79","159","158"],"answer":3},{"prompt":"An endpoint returns **822 items**, **10** per page. How many pages are there?","options":["83","82","41","84"],"answer":0}]
---
# Design Drill: Pagination maths #60

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
