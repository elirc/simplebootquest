---
slug: "sd07-pages-6"
title: "Design Drill: Pagination maths #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **2550 items**, **10** per page. How many pages are there?","options":["255","256","10","128"],"answer":0},{"prompt":"An endpoint returns **2410 items**, **20** per page. How many pages are there?","options":["121","60","122","120"],"answer":0},{"prompt":"An endpoint returns **728 items**, **20** per page. How many pages are there?","options":["38","37","36","18"],"answer":1},{"prompt":"An endpoint returns **3900 items**, **25** per page. How many pages are there?","options":["157","78","156","155"],"answer":2},{"prompt":"An endpoint returns **2380 items**, **100** per page. How many pages are there?","options":["23","25","12","24"],"answer":3}]
---
# Design Drill: Pagination maths #6

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
