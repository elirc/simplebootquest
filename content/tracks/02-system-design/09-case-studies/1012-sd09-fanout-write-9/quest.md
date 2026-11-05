---
slug: "sd09-fanout-write-9"
title: "Design Drill: Feed fan-out cost #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **450 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2700","121,500","1.22 million","450"],"answer":2},{"prompt":"Users publish **80 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["80","1500","12,000","120,000"],"answer":3},{"prompt":"Users publish **440 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.58 million","3600","158,400","440"],"answer":0},{"prompt":"Users publish **130 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["78,000","130","600","7800"],"answer":0},{"prompt":"Users publish **340 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3200","1.09 million","340","108,800"],"answer":1}]
---
# Design Drill: Feed fan-out cost #9

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
