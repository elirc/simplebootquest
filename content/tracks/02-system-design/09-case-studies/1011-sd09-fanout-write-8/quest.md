---
slug: "sd09-fanout-write-8"
title: "Design Drill: Feed fan-out cost #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **50 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2100","105,000","10,500","50"],"answer":1},{"prompt":"Users publish **120 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["480,000","4000","48,000","120"],"answer":0},{"prompt":"Users publish **20 posts/s**, and each author has **3400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["68,000","3400","6800","20"],"answer":0},{"prompt":"Users publish **130 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["6500","65,000","130","500"],"answer":1},{"prompt":"Users publish **120 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["18,000","180,000","120","1500"],"answer":1}]
---
# Design Drill: Feed fan-out cost #8

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
