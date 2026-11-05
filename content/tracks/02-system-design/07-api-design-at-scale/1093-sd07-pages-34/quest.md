---
slug: "sd07-pages-34"
title: "Design Drill: Pagination maths #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2420 items**, **100** per page. How many pages are there?","options":["25","24","12","26"],"answer":0},{"prompt":"An endpoint returns **3800 items**, **25** per page. How many pages are there?","options":["153","76","151","152"],"answer":3},{"prompt":"An endpoint returns **4430 items**, **50** per page. How many pages are there?","options":["89","90","44","88"],"answer":0},{"prompt":"An endpoint returns **4010 items**, **100** per page. How many pages are there?","options":["42","41","40","20"],"answer":1},{"prompt":"An endpoint returns **127 items**, **50** per page. How many pages are there?","options":["3","2","1","4"],"answer":0}]
---
# Design Drill: Pagination maths #34

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
