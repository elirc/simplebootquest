---
slug: "sd-d-api-deprecation"
title: "Design Doc: Retiring an API Version"
type: "design"
xp: 40
rubric: ["Uses data (logs per API key) to identify v1 users", "Sets a clear timeline with a sunset date, giving months of notice", "Adds Deprecation and/or Sunset headers, plus a link to a migration guide", "Publishes a migration guide mapping v1 fields to v2", "Enforces gradually (brownouts, or blocking new keys first) instead of an abrupt shutdown", "Plans for exceptions (large customers) and a way to reverse course"]
minWords: 150
---
# Design Doc: Retiring an API Version

Your public REST API has `/v1/todos`, which returns `{ id, name, completed }`, and `/v2/todos`, which returns `{ id, title, status, dueAt }`. v2 launched 6 months ago. v1 still gets **35% of traffic**, from about 400 API keys, including a few big customers. Keeping both is slowing the team down.

Plan v1's retirement.

### What to include
1. **Discovery**: who still uses v1, and how you'll find out.
2. **Communication**: the timeline, channels, and the migration guide.
3. **Technical signals** in the API itself.
4. **Gradual enforcement**: how you'll avoid a cliff edge.
5. **Exceptions and rollback.**
