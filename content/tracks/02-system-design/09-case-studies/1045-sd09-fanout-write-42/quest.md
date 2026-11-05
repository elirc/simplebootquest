---
slug: "sd09-fanout-write-42"
title: "Design Drill: Feed fan-out cost #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **150 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150","3900","585,000","58,500"],"answer":2},{"prompt":"Users publish **120 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3600","120","432,000","43,200"],"answer":2},{"prompt":"Users publish **490 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["63,700","490","637,000","1300"],"answer":2},{"prompt":"Users publish **20 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["34,000","1700","3400","20"],"answer":0},{"prompt":"Users publish **480 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["480","67,200","672,000","1400"],"answer":2}]
---
# Design Drill: Feed fan-out cost #42

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
