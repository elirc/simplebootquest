---
slug: "sd07-pages-13"
title: "Design Drill: Pagination maths #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4630 items**, **25** per page. How many pages are there?","options":["185","93","187","186"],"answer":3},{"prompt":"An endpoint returns **222 items**, **25** per page. How many pages are there?","options":["10","4","8","9"],"answer":3},{"prompt":"An endpoint returns **2740 items**, **20** per page. How many pages are there?","options":["138","68","136","137"],"answer":3},{"prompt":"An endpoint returns **1540 items**, **20** per page. How many pages are there?","options":["38","76","77","78"],"answer":2},{"prompt":"An endpoint returns **3170 items**, **100** per page. How many pages are there?","options":["32","33","31","16"],"answer":0}]
---
# Design Drill: Pagination maths #13

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
