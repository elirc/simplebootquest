---
slug: "sd09-fanout-write-50"
title: "Design Drill: Feed fan-out cost #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **490 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.18 million","2400","117,600","490"],"answer":0},{"prompt":"Users publish **470 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3900","1.83 million","470","183,300"],"answer":1},{"prompt":"Users publish **440 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3200","440","140,800","1.41 million"],"answer":3},{"prompt":"Users publish **480 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1700","480","816,000","81,600"],"answer":2},{"prompt":"Users publish **340 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2900","340","98,600","986,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #50

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
