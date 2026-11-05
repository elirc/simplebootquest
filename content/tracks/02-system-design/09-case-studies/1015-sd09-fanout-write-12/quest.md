---
slug: "sd09-fanout-write-12"
title: "Design Drill: Feed fan-out cost #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **280 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["280","868,000","86,800","3100"],"answer":1},{"prompt":"Users publish **410 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.27 million","127,100","3100","410"],"answer":0},{"prompt":"Users publish **490 posts/s**, and each author has **1200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["588,000","490","1200","58,800"],"answer":0},{"prompt":"Users publish **40 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3900","15,600","40","156,000"],"answer":3},{"prompt":"Users publish **400 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["400","84,000","840,000","2100"],"answer":2}]
---
# Design Drill: Feed fan-out cost #12

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
