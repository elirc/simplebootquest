---
slug: "sd09-fanout-write-31"
title: "Design Drill: Feed fan-out cost #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **460 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["460","2400","1.1 million","110,400"],"answer":2},{"prompt":"Users publish **250 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["4000","250","1 million","100,000"],"answer":2},{"prompt":"Users publish **20 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20","500","1000","10,000"],"answer":3},{"prompt":"Users publish **50 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2000","50","20,000","400"],"answer":2},{"prompt":"Users publish **460 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.38 million","460","3000","138,000"],"answer":0}]
---
# Design Drill: Feed fan-out cost #31

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
