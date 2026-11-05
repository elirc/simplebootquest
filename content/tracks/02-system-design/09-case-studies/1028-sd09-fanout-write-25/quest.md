---
slug: "sd09-fanout-write-25"
title: "Design Drill: Feed fan-out cost #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **450 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.3 million","130,500","450","2900"],"answer":0},{"prompt":"Users publish **440 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["22,000","220,000","440","500"],"answer":1},{"prompt":"Users publish **10 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["360,000","3600","36,000","10"],"answer":2},{"prompt":"Users publish **430 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["34,400","344,000","800","430"],"answer":1},{"prompt":"Users publish **150 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["480,000","150","3200","48,000"],"answer":0}]
---
# Design Drill: Feed fan-out cost #25

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
