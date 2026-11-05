---
slug: "sd-case-activity-feed"
title: "Case Study: Activity Feed"
type: "design"
xp: 60
hints: ["Write down the cost of each approach per post and per feed view, then look at the celebrity case."]
rubric: ["States functional and non-functional requirements, with rough numbers", "Includes a high-level diagram or component list showing how requests flow", "Defines the data model (tables or collections, with key fields and indexes)", "Describes the API endpoints or interfaces between components", "Identifies the main bottleneck or risk and how the design handles it", "Names at least two trade-offs or rejected alternatives", "Compares fan-out on read vs fan-out on write and handles celebrity accounts"]
minWords: 150
---
# Case Study: Activity Feed

Users can follow other users. Their home page shows a **feed** of recent activity from the people they follow (new recipes, comments, likes), newest first, paginated.

Most users follow fewer than 200 people, but a few "celebrity" accounts have 500k followers. Assume 1M daily active users, each loading the feed ~10 times a day, and 50k new activities an hour.

Compare **fan-out on read** (query at view time) with **fan-out on write** (precompute each user's feed), and design the system.
