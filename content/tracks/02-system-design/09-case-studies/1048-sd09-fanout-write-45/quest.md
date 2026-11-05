---
slug: "sd09-fanout-write-45"
title: "Design Drill: Feed fan-out cost #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **330 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["125,400","330","1.25 million","3800"],"answer":2},{"prompt":"Users publish **110 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["176,000","110","1600","17,600"],"answer":0},{"prompt":"Users publish **250 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["250","42,500","425,000","1700"],"answer":2},{"prompt":"Users publish **450 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["450","1.62 million","162,000","3600"],"answer":1},{"prompt":"Users publish **230 posts/s**, and each author has **2500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["575,000","57,500","2500","230"],"answer":0}]
---
# Design Drill: Feed fan-out cost #45

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
