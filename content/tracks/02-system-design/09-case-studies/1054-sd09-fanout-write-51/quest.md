---
slug: "sd09-fanout-write-51"
title: "Design Drill: Feed fan-out cost #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **340 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2800","340","952,000","95,200"],"answer":2},{"prompt":"Users publish **360 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3100","360","111,600","1.12 million"],"answer":3},{"prompt":"Users publish **60 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3600","21,600","60","216,000"],"answer":3},{"prompt":"Users publish **170 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["23,800","238,000","170","1400"],"answer":1},{"prompt":"Users publish **420 posts/s**, and each author has **100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["420","42,000","100","4200"],"answer":1}]
---
# Design Drill: Feed fan-out cost #51

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
