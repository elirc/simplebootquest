---
slug: "sd09-fanout-write-44"
title: "Design Drill: Feed fan-out cost #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **60 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["7800","1300","60","78,000"],"answer":3},{"prompt":"Users publish **340 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2300","782,000","78,200","340"],"answer":1},{"prompt":"Users publish **270 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["86,400","864,000","3200","270"],"answer":1},{"prompt":"Users publish **200 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["360,000","1800","36,000","200"],"answer":0},{"prompt":"Users publish **150 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["800","150","120,000","12,000"],"answer":2}]
---
# Design Drill: Feed fan-out cost #44

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
