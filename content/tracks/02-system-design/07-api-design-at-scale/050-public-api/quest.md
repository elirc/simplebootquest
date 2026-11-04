---
slug: "sd-public-api"
title: "Design Doc: A Public API for Developers"
type: "design"
xp: 40
hints: ["Write it from the third-party developer's point of view: what do they need to build a reliable integration?"]
rubric: ["Uses API keys or OAuth with scopes, plus revocation and rotation", "Defines resource URLs, pagination (cursor-based) and filtering", "States a versioning and deprecation policy with timelines", "Specifies rate limits per key, with 429 + Retry-After / RateLimit headers", "Designs signed webhooks with event ids, retries and SSRF protection", "Defines a consistent error format and a documentation approach (e.g. OpenAPI)"]
minWords: 200
---
# Design Doc: A Public API for Developers

Partners want to integrate with your capstone: read and create records programmatically and be notified of changes. Design a **public API v1** for third-party developers.

Cover:

- Authentication for third parties (how do they get credentials? How are they scoped and revoked?).
- Resource design and URLs for 2–3 core resources, including pagination and filtering.
- Your versioning and deprecation policy.
- Rate limits (per what? how communicated?).
- Webhooks: which events, payload shape, signing, retries.
- Error format, and how you'll document the API.
