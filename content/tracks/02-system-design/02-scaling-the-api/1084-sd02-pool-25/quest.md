---
slug: "sd02-pool-25"
title: "Design Drill: Connection pool maths #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **22 instances** with a pool of **20** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 22 connections","It fits: 440 connections","It fits: 20 connections","It doesn't fit: 440 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":3},{"prompt":"You run **9 instances** with a pool of **25** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 225 connections","It fits: 25 connections","It doesn't fit: 225 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 9 connections"],"answer":2},{"prompt":"You run **20 instances** with a pool of **10** connections each. Postgres allows **100** connections (keep 10 for admin). What happens at full load?","options":["It fits: 200 connections","It doesn't fit: 200 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 20 connections","It fits: 10 connections"],"answer":1},{"prompt":"You run **38 instances** with a pool of **5** connections each. Postgres allows **500** connections (keep 10 for admin). What happens at full load?","options":["It doesn't fit: 190 connections needed. Use a pooler (PgBouncer) or shrink the pools","It fits: 38 connections","It fits: 190 connections","It fits: 5 connections"],"answer":2},{"prompt":"You run **37 instances** with a pool of **5** connections each. Postgres allows **200** connections (keep 10 for admin). What happens at full load?","options":["It fits: 185 connections","It fits: 5 connections","It fits: 37 connections","It doesn't fit: 185 connections needed. Use a pooler (PgBouncer) or shrink the pools"],"answer":0}]
---
# Design Drill: Connection pool maths #25

Total DB connections = instances × pool size per instance. It must stay below the database's max_connections (minus a few reserved for admin), or new connections fail under load.
