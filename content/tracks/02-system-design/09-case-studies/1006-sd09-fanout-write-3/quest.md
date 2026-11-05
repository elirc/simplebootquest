---
slug: "sd09-fanout-write-3"
title: "Design Drill: Feed fan-out cost #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **320 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["60,800","608,000","320","1900"],"answer":1},{"prompt":"Users publish **140 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["140","532,000","3800","53,200"],"answer":1},{"prompt":"Users publish **10 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["10","4000","40,000","400"],"answer":1},{"prompt":"Users publish **180 posts/s**, and each author has **100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["100","1800","18,000","180"],"answer":2},{"prompt":"Users publish **210 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["200","210","4200","42,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #3

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
