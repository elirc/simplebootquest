---
slug: "sd09-fanout-write-35"
title: "Design Drill: Feed fan-out cost #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **370 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.11 million","111,000","3000","370"],"answer":0},{"prompt":"Users publish **350 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["350","105,000","1.05 million","3000"],"answer":2},{"prompt":"Users publish **250 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["72,500","2900","250","725,000"],"answer":3},{"prompt":"Users publish **340 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1100","374,000","340","37,400"],"answer":1},{"prompt":"Users publish **250 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["250","175,000","17,500","700"],"answer":1}]
---
# Design Drill: Feed fan-out cost #35

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
