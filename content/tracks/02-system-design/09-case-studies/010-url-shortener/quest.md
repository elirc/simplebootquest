---
slug: "sd-case-url-shortener"
title: "Case Study: URL Shortener"
type: "design"
xp: 50
hints: ["Redirects outnumber creates 100:1, so optimise that path first."]
rubric: ["States functional and non-functional requirements, with rough numbers", "Includes a high-level diagram or component list showing how requests flow", "Defines the data model (tables or collections, with key fields and indexes)", "Describes the API endpoints or interfaces between components", "Identifies the main bottleneck or risk and how the design handles it", "Names at least two trade-offs or rejected alternatives", "Explains the code generation strategy and how collisions are handled"]
minWords: 150
---
# Case Study: URL Shortener

Design a service like bit.ly: users submit a long URL and get a short code (`sbq.link/aZ3k9Q`). Visiting the short link redirects to the original URL. Also track click counts.

Assume 1M new links a month and 100M redirects a month (a heavily read-skewed workload), with redirects needing to be fast (< 50 ms at p95) and highly available.

Consider: how codes are generated (random? counter + base62?), collisions, the redirect status code (301 vs 302), caching redirects, counting clicks without slowing redirects down, and abuse (phishing links).
