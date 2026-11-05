---
slug: "sd07-pages-40"
title: "Design Drill: Pagination maths #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4700 items**, **50** per page. How many pages are there?","options":["93","95","94","47"],"answer":2},{"prompt":"An endpoint returns **2560 items**, **10** per page. How many pages are there?","options":["257","128","256","255"],"answer":2},{"prompt":"An endpoint returns **2050 items**, **20** per page. How many pages are there?","options":["104","102","51","103"],"answer":3},{"prompt":"An endpoint returns **4340 items**, **20** per page. How many pages are there?","options":["109","219","218","217"],"answer":2},{"prompt":"An endpoint returns **2590 items**, **100** per page. How many pages are there?","options":["13","26","25","27"],"answer":1}]
---
# Design Drill: Pagination maths #40

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
