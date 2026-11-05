---
slug: "sd07-pages-2"
title: "Design Drill: Pagination maths #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **1630 items**, **25** per page. How many pages are there?","options":["67","33","65","66"],"answer":3},{"prompt":"An endpoint returns **4140 items**, **25** per page. How many pages are there?","options":["165","83","167","166"],"answer":3},{"prompt":"An endpoint returns **869 items**, **25** per page. How many pages are there?","options":["35","34","17","36"],"answer":0},{"prompt":"An endpoint returns **3040 items**, **20** per page. How many pages are there?","options":["76","152","153","154"],"answer":2},{"prompt":"An endpoint returns **2900 items**, **25** per page. How many pages are there?","options":["58","117","116","115"],"answer":2}]
---
# Design Drill: Pagination maths #2

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
