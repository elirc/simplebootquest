---
slug: "sd-d-traffic-spike"
title: "Design Doc: Surviving a 20× Traffic Spike"
type: "design"
xp: 40
rubric: ["Estimates the expected load on the key endpoints with numbers", "Identifies the database and the connection pool as likely bottlenecks", "Moves static content and the landing page to a CDN or cache", "Includes load testing before the event", "Has graceful degradation or kill switches for non-essential features", "Plans monitoring and on-call for the night", "Avoids risky large changes right before the event"]
minWords: 150
---
# Design Doc: Surviving a 20× Traffic Spike

Your app will be featured on national TV next Tuesday at 8 pm. Marketing expects about **20× normal peak traffic** for an hour, mostly people landing on the home page and signing up. Today, the app runs as two Node instances, one Postgres database, and no CDN.

Write a short plan to get through the evening.

### What to include
1. **What the traffic does**: which pages and endpoints get hit, with rough numbers.
2. **Bottlenecks**, in order of likelihood.
3. **Changes before Tuesday**, cheapest and safest first.
4. **On the night**: dashboards, alerts, who's on call, and the "big red buttons" (feature flags, degraded modes).
5. **What you won't do**, and why (no risky rewrites a week before!).
