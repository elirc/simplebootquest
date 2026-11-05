---
slug: "sd02-pool-43"
title: "Design Drill: Connection pool maths #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **24 instances** with a pool of **10** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 24 connections","It fits: 240 connections","It doesn't fit: 240 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 10 connections"],"answer":1},{"prompt":"You run **21 instances** with a pool of **8** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 8 connections","It doesn't fit: 168 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 21 connections","It fits: 168 connections"],"answer":3},{"prompt":"You run **2 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 40 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 40 connections","It fits: 20 connections","It fits: 2 connections"],"answer":1},{"prompt":"You run **6 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It fits: 30 connections","It fits: 5 connections","It fits: 6 connections","It doesn't fit: 30 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0},{"prompt":"You run **23 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 23 connections","It fits: 575 connections","It fits: 25 connections","It doesn't fit: 575 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3}]
---
# Design Drill: Connection pool maths #43

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
