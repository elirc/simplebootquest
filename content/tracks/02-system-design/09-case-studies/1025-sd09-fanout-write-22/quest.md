---
slug: "sd09-fanout-write-22"
title: "Design Drill: Feed fan-out cost #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **90 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["18,000","200","1800","90"],"answer":0},{"prompt":"Users publish **380 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["4000","380","152,000","1.52 million"],"answer":3},{"prompt":"Users publish **80 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["264,000","3300","26,400","80"],"answer":0},{"prompt":"Users publish **70 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3200","70","22,400","224,000"],"answer":3},{"prompt":"Users publish **350 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["350","2900","1.01 million","101,500"],"answer":2}]
---
# Design Drill: Feed fan-out cost #22

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
