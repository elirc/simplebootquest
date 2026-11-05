---
slug: "sd09-fanout-write-29"
title: "Design Drill: Feed fan-out cost #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **430 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.03 million","103,200","430","2400"],"answer":0},{"prompt":"Users publish **330 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["330","3900","128,700","1.29 million"],"answer":3},{"prompt":"Users publish **40 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["12,000","3000","120,000","40"],"answer":2},{"prompt":"Users publish **380 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["684,000","380","1800","68,400"],"answer":0},{"prompt":"Users publish **330 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["132,000","330","13,200","400"],"answer":0}]
---
# Design Drill: Feed fan-out cost #29

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
