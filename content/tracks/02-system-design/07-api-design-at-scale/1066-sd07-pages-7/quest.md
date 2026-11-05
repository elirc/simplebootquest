---
slug: "sd07-pages-7"
title: "Design Drill: Pagination maths #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **657 items**, **20** per page. How many pages are there?","options":["32","33","16","34"],"answer":1},{"prompt":"An endpoint returns **4080 items**, **100** per page. How many pages are there?","options":["41","42","20","40"],"answer":0},{"prompt":"An endpoint returns **1530 items**, **20** per page. How many pages are there?","options":["77","78","38","76"],"answer":0},{"prompt":"An endpoint returns **4170 items**, **20** per page. How many pages are there?","options":["210","104","209","208"],"answer":2},{"prompt":"An endpoint returns **1990 items**, **25** per page. How many pages are there?","options":["40","81","80","79"],"answer":2}]
---
# Design Drill: Pagination maths #7

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
