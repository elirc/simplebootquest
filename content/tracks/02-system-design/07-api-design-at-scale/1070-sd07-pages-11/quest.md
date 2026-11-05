---
slug: "sd07-pages-11"
title: "Design Drill: Pagination maths #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **372 items**, **50** per page. How many pages are there?","options":["4","9","7","8"],"answer":3},{"prompt":"An endpoint returns **1460 items**, **50** per page. How many pages are there?","options":["15","29","30","31"],"answer":2},{"prompt":"An endpoint returns **2510 items**, **25** per page. How many pages are there?","options":["50","101","100","102"],"answer":1},{"prompt":"An endpoint returns **2050 items**, **50** per page. How many pages are there?","options":["41","20","40","42"],"answer":0},{"prompt":"An endpoint returns **617 items**, **25** per page. How many pages are there?","options":["25","12","26","24"],"answer":0}]
---
# Design Drill: Pagination maths #11

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
