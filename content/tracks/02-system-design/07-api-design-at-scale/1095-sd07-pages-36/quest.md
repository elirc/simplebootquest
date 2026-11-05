---
slug: "sd07-pages-36"
title: "Design Drill: Pagination maths #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **4660 items**, **20** per page. How many pages are there?","options":["232","234","233","116"],"answer":2},{"prompt":"An endpoint returns **2550 items**, **100** per page. How many pages are there?","options":["13","27","26","25"],"answer":2},{"prompt":"An endpoint returns **4430 items**, **25** per page. How many pages are there?","options":["178","179","89","177"],"answer":0},{"prompt":"An endpoint returns **2730 items**, **10** per page. How many pages are there?","options":["137","273","275","274"],"answer":3},{"prompt":"An endpoint returns **3720 items**, **20** per page. How many pages are there?","options":["93","188","186","187"],"answer":3}]
---
# Design Drill: Pagination maths #36

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
