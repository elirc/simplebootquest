---
slug: "sd09-fanout-write-46"
title: "Design Drill: Feed fan-out cost #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **340 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["81,600","816,000","2400","340"],"answer":1},{"prompt":"Users publish **160 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["160","224,000","1400","22,400"],"answer":1},{"prompt":"Users publish **460 posts/s**, and each author has **1200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1200","460","55,200","552,000"],"answer":3},{"prompt":"Users publish **440 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2200","968,000","440","96,800"],"answer":1},{"prompt":"Users publish **400 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["24,000","240,000","600","400"],"answer":1}]
---
# Design Drill: Feed fan-out cost #46

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
