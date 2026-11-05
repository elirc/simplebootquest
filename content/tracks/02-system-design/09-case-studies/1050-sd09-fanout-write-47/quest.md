---
slug: "sd09-fanout-write-47"
title: "Design Drill: Feed fan-out cost #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **190 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["190","9500","500","95,000"],"answer":3},{"prompt":"Users publish **90 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["90","8100","900","81,000"],"answer":3},{"prompt":"Users publish **60 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["60","900","54,000","5400"],"answer":2},{"prompt":"Users publish **240 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1100","240","26,400","264,000"],"answer":3},{"prompt":"Users publish **350 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1900","66,500","350","665,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #47

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
