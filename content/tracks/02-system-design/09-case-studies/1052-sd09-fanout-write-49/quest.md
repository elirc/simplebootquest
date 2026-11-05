---
slug: "sd09-fanout-write-49"
title: "Design Drill: Feed fan-out cost #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **120 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["900","10,800","108,000","120"],"answer":2},{"prompt":"Users publish **290 posts/s**, and each author has **2500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2500","725,000","290","72,500"],"answer":1},{"prompt":"Users publish **260 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["260","936,000","3600","93,600"],"answer":1},{"prompt":"Users publish **210 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["210","63,000","630,000","3000"],"answer":2},{"prompt":"Users publish **500 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.05 million","500","2100","105,000"],"answer":0}]
---
# Design Drill: Feed fan-out cost #49

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
