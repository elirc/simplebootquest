---
slug: "sd07-pages-26"
title: "Design Drill: Pagination maths #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint returns **3690 items**, **10** per page. How many pages are there?","options":["371","369","370","185"],"answer":2},{"prompt":"An endpoint returns **977 items**, **10** per page. How many pages are there?","options":["99","49","98","97"],"answer":2},{"prompt":"An endpoint returns **1260 items**, **10** per page. How many pages are there?","options":["63","127","126","125"],"answer":2},{"prompt":"An endpoint returns **2500 items**, **25** per page. How many pages are there?","options":["50","100","101","102"],"answer":2},{"prompt":"An endpoint returns **3710 items**, **10** per page. How many pages are there?","options":["186","372","371","373"],"answer":1}]
---
# Design Drill: Pagination maths #26

Pages = ceil(total ÷ page size). Deep OFFSET pages are slow because the database still walks past every skipped row; cursors avoid that.
