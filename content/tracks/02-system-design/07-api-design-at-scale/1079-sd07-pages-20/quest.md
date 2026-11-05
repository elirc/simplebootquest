---
slug: "sd07-pages-20"
title: "Design Drill: Pagination maths #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3420 items**, **100** per page. How many pages are there?","options":["35","36","34","17"],"answer":0},{"prompt":"An endpoint returns **1890 items**, **10** per page. How many pages are there?","options":["190","189","94","188"],"answer":1},{"prompt":"An endpoint returns **150 items**, **25** per page. How many pages are there?","options":["7","25","6","3"],"answer":2},{"prompt":"An endpoint returns **3340 items**, **20** per page. How many pages are there?","options":["167","84","168","20"],"answer":0},{"prompt":"An endpoint returns **4760 items**, **10** per page. How many pages are there?","options":["238","475","476","477"],"answer":2}]
---
# Design Drill: Pagination maths #20

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
