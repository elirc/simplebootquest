---
slug: "sd07-pages-35"
title: "Design Drill: Pagination maths #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1840 items**, **25** per page. How many pages are there?","options":["75","37","74","73"],"answer":2},{"prompt":"An endpoint returns **3680 items**, **100** per page. How many pages are there?","options":["36","37","38","18"],"answer":1},{"prompt":"An endpoint returns **2690 items**, **10** per page. How many pages are there?","options":["270","134","268","269"],"answer":3},{"prompt":"An endpoint returns **1770 items**, **10** per page. How many pages are there?","options":["178","177","176","88"],"answer":1},{"prompt":"An endpoint returns **3370 items**, **10** per page. How many pages are there?","options":["169","339","337","338"],"answer":3}]
---
# Design Drill: Pagination maths #35

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
