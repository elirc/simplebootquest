---
slug: "sd07-pages-25"
title: "Design Drill: Pagination maths #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2070 items**, **50** per page. How many pages are there?","options":["43","41","21","42"],"answer":3},{"prompt":"An endpoint returns **3010 items**, **100** per page. How many pages are there?","options":["31","32","30","15"],"answer":0},{"prompt":"An endpoint returns **3560 items**, **20** per page. How many pages are there?","options":["89","178","179","180"],"answer":2},{"prompt":"An endpoint returns **4290 items**, **10** per page. How many pages are there?","options":["214","429","430","428"],"answer":1},{"prompt":"An endpoint returns **4540 items**, **100** per page. How many pages are there?","options":["45","23","47","46"],"answer":3}]
---
# Design Drill: Pagination maths #25

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
