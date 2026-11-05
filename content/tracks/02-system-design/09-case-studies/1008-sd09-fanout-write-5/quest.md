---
slug: "sd09-fanout-write-5"
title: "Design Drill: Feed fan-out cost #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **110 posts/s**, and each author has **3500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["385,000","3500","110","38,500"],"answer":0},{"prompt":"Users publish **450 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["675,000","1500","450","67,500"],"answer":0},{"prompt":"Users publish **480 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["105,600","480","1.06 million","2200"],"answer":2},{"prompt":"Users publish **390 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["200","78,000","7800","390"],"answer":1},{"prompt":"Users publish **230 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["184,000","800","230","18,400"],"answer":0}]
---
# Design Drill: Feed fan-out cost #5

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
