---
slug: "sd07-pages-52"
title: "Design Drill: Pagination maths #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1310 items**, **100** per page. How many pages are there?","options":["14","15","7","13"],"answer":0},{"prompt":"An endpoint returns **4250 items**, **10** per page. How many pages are there?","options":["213","427","425","426"],"answer":3},{"prompt":"An endpoint returns **2360 items**, **10** per page. How many pages are there?","options":["118","237","236","235"],"answer":2},{"prompt":"An endpoint returns **1750 items**, **10** per page. How many pages are there?","options":["88","177","176","175"],"answer":2},{"prompt":"An endpoint returns **4720 items**, **25** per page. How many pages are there?","options":["188","94","190","189"],"answer":3}]
---
# Design Drill: Pagination maths #52

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
