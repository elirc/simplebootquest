---
slug: "sd09-fanout-write-18"
title: "Design Drill: Feed fan-out cost #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **80 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2300","184,000","18,400","80"],"answer":1},{"prompt":"Users publish **500 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1600","80,000","500","800,000"],"answer":3},{"prompt":"Users publish **320 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["70,400","2200","320","704,000"],"answer":3},{"prompt":"Users publish **30 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["6000","30","200","600"],"answer":0},{"prompt":"Users publish **160 posts/s**, and each author has **3500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["56,000","160","560,000","3500"],"answer":2}]
---
# Design Drill: Feed fan-out cost #18

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
