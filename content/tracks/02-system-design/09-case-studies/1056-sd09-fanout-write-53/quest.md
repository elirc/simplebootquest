---
slug: "sd09-fanout-write-53"
title: "Design Drill: Feed fan-out cost #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **390 posts/s**, and each author has **3700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3700","390","144,300","1.44 million"],"answer":3},{"prompt":"Users publish **130 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["182,000","1400","130","18,200"],"answer":0},{"prompt":"Users publish **150 posts/s**, and each author has **300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150","4500","300","45,000"],"answer":3},{"prompt":"Users publish **490 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3100","1.52 million","490","151,900"],"answer":1},{"prompt":"Users publish **150 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150","60,000","6000","400"],"answer":1}]
---
# Design Drill: Feed fan-out cost #53

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
