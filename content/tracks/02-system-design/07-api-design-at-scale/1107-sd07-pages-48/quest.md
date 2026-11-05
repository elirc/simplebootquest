---
slug: "sd07-pages-48"
title: "Design Drill: Pagination maths #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3910 items**, **50** per page. How many pages are there?","options":["78","80","79","39"],"answer":2},{"prompt":"An endpoint returns **934 items**, **100** per page. How many pages are there?","options":["5","11","9","10"],"answer":3},{"prompt":"An endpoint returns **3880 items**, **50** per page. How many pages are there?","options":["39","77","78","79"],"answer":2},{"prompt":"An endpoint returns **3900 items**, **10** per page. How many pages are there?","options":["390","391","389","195"],"answer":0},{"prompt":"An endpoint returns **4120 items**, **50** per page. How many pages are there?","options":["84","41","82","83"],"answer":3}]
---
# Design Drill: Pagination maths #48

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
