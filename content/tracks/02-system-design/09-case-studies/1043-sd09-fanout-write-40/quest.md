---
slug: "sd09-fanout-write-40"
title: "Design Drill: Feed fan-out cost #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **170 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["49,300","493,000","2900","170"],"answer":1},{"prompt":"Users publish **380 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["380","1.37 million","3600","136,800"],"answer":1},{"prompt":"Users publish **430 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1100","47,300","473,000","430"],"answer":2},{"prompt":"Users publish **300 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3000","90,000","300","900,000"],"answer":3},{"prompt":"Users publish **430 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2700","430","116,100","1.16 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #40

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
