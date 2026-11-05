---
slug: "sd09-fanout-write-20"
title: "Design Drill: Feed fan-out cost #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **230 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["4000","230","920,000","92,000"],"answer":2},{"prompt":"Users publish **470 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3800","1.79 million","178,600","470"],"answer":1},{"prompt":"Users publish **100 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["4000","100","40,000","400"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["5000","100","500","50,000"],"answer":3},{"prompt":"Users publish **480 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["480","115,200","2400","1.15 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #20

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
