---
slug: "sd07-pages-46"
title: "Design Drill: Pagination maths #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3290 items**, **100** per page. How many pages are there?","options":["33","32","16","34"],"answer":0},{"prompt":"An endpoint returns **2470 items**, **100** per page. How many pages are there?","options":["25","12","24","26"],"answer":0},{"prompt":"An endpoint returns **3840 items**, **20** per page. How many pages are there?","options":["194","96","193","192"],"answer":2},{"prompt":"An endpoint returns **674 items**, **25** per page. How many pages are there?","options":["26","28","27","13"],"answer":2},{"prompt":"An endpoint returns **2190 items**, **100** per page. How many pages are there?","options":["22","11","21","23"],"answer":0}]
---
# Design Drill: Pagination maths #46

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
