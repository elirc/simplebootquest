---
slug: "sd07-pages-17"
title: "Design Drill: Pagination maths #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1290 items**, **100** per page. How many pages are there?","options":["6","14","12","13"],"answer":3},{"prompt":"An endpoint returns **3840 items**, **50** per page. How many pages are there?","options":["38","76","78","77"],"answer":3},{"prompt":"An endpoint returns **3770 items**, **10** per page. How many pages are there?","options":["377","188","376","378"],"answer":0},{"prompt":"An endpoint returns **1280 items**, **25** per page. How many pages are there?","options":["26","53","51","52"],"answer":3},{"prompt":"An endpoint returns **1220 items**, **100** per page. How many pages are there?","options":["12","13","14","6"],"answer":1}]
---
# Design Drill: Pagination maths #17

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
