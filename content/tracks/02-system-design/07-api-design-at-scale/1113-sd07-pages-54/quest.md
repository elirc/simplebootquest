---
slug: "sd07-pages-54"
title: "Design Drill: Pagination maths #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3630 items**, **20** per page. How many pages are there?","options":["183","181","182","91"],"answer":2},{"prompt":"An endpoint returns **2210 items**, **10** per page. How many pages are there?","options":["221","220","222","110"],"answer":0},{"prompt":"An endpoint returns **903 items**, **25** per page. How many pages are there?","options":["36","18","38","37"],"answer":3},{"prompt":"An endpoint returns **1120 items**, **50** per page. How many pages are there?","options":["22","11","24","23"],"answer":3},{"prompt":"An endpoint returns **3070 items**, **10** per page. How many pages are there?","options":["306","308","153","307"],"answer":3}]
---
# Design Drill: Pagination maths #54

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
