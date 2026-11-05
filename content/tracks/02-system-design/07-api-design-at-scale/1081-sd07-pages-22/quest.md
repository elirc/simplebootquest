---
slug: "sd07-pages-22"
title: "Design Drill: Pagination maths #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3660 items**, **10** per page. How many pages are there?","options":["366","183","367","368"],"answer":2},{"prompt":"An endpoint returns **2420 items**, **20** per page. How many pages are there?","options":["120","60","121","122"],"answer":2},{"prompt":"An endpoint returns **2120 items**, **20** per page. How many pages are there?","options":["107","106","53","105"],"answer":1},{"prompt":"An endpoint returns **3040 items**, **10** per page. How many pages are there?","options":["152","10","305","304"],"answer":3},{"prompt":"An endpoint returns **841 items**, **25** per page. How many pages are there?","options":["17","33","34","35"],"answer":2}]
---
# Design Drill: Pagination maths #22

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
