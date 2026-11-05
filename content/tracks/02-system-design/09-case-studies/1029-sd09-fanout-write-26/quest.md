---
slug: "sd09-fanout-write-26"
title: "Design Drill: Feed fan-out cost #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **320 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["67,200","320","672,000","2100"],"answer":2},{"prompt":"Users publish **90 posts/s**, and each author has **1000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["9000","90,000","1000","90"],"answer":1},{"prompt":"Users publish **450 posts/s**, and each author has **1000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["450,000","450","1000","45,000"],"answer":0},{"prompt":"Users publish **470 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3200","470","1.5 million","150,400"],"answer":2},{"prompt":"Users publish **420 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3100","420","130,200","1.3 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #26

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
