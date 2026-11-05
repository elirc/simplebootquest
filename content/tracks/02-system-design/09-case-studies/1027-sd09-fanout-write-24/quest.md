---
slug: "sd09-fanout-write-24"
title: "Design Drill: Feed fan-out cost #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **490 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3600","1.76 million","490","176,400"],"answer":1},{"prompt":"Users publish **140 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["600","84,000","8400","140"],"answer":1},{"prompt":"Users publish **450 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["450","1.17 million","2600","117,000"],"answer":1},{"prompt":"Users publish **360 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["800","288,000","28,800","360"],"answer":1},{"prompt":"Users publish **230 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["500","11,500","115,000","230"],"answer":2}]
---
# Design Drill: Feed fan-out cost #24

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
