---
slug: "sd07-pages-9"
title: "Design Drill: Pagination maths #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **859 items**, **100** per page. How many pages are there?","options":["4","10","9","8"],"answer":2},{"prompt":"An endpoint returns **1530 items**, **25** per page. How many pages are there?","options":["31","63","61","62"],"answer":3},{"prompt":"An endpoint returns **656 items**, **20** per page. How many pages are there?","options":["16","33","32","34"],"answer":1},{"prompt":"An endpoint returns **4110 items**, **25** per page. How many pages are there?","options":["165","166","164","82"],"answer":0},{"prompt":"An endpoint returns **68 items**, **100** per page. How many pages are there?","options":["2","1","0","100"],"answer":1}]
---
# Design Drill: Pagination maths #9

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
