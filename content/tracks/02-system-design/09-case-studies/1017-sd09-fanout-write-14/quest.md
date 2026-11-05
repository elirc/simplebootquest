---
slug: "sd09-fanout-write-14"
title: "Design Drill: Feed fan-out cost #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **430 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["903,000","2100","90,300","430"],"answer":0},{"prompt":"Users publish **60 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["60","13,200","2200","132,000"],"answer":3},{"prompt":"Users publish **330 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["528,000","52,800","330","1600"],"answer":0},{"prompt":"Users publish **70 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["77,000","1100","7700","70"],"answer":0},{"prompt":"Users publish **70 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["400","2800","70","28,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #14

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
