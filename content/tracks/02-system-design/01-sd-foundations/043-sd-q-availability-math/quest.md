---
slug: "sd-q-availability-math"
title: "Availability Math"
type: "quiz"
xp: 15
questions: [{"prompt": "Your API depends on three services, each 99.9% available, all required for every request. Roughly what is your best-case availability?", "options": ["99.9%", "99.7%", "99.99%", "97%"], "answer": 1}, {"prompt": "Two replicas, each 99% available with independent failures. How available is \"at least one is up\"?", "options": ["99%", "99.5%", "99.99%", "100%"], "answer": 2}, {"prompt": "Why might two replicas NOT give you that improvement in practice?", "options": ["Replicas are always slower", "Correlated failures: the same region outage, bad deploy or config change takes both down", "Math does not apply to servers"], "answer": 1}, {"prompt": "About how much downtime per month does 99.9% allow?", "options": ["4 minutes", "43 minutes", "7 hours", "3 days"], "answer": 1}, {"prompt": "How can you raise availability when a non-critical dependency is flaky?", "options": ["Make it required", "Degrade gracefully: serve the page without that feature when it is down", "Retry it forever"], "answer": 1}]
---
# Availability Math

Availability is usually quoted in "nines":

| Availability | Downtime per month |
|--------------|-------------------|
| 99% | ~7.2 hours |
| 99.9% | ~43 minutes |
| 99.95% | ~22 minutes |
| 99.99% | ~4.3 minutes |

**Dependencies in series multiply**: if your API needs the database (99.9%) **and** the auth provider (99.9%), the best you can do is 0.999 × 0.999 ≈ **99.8%**. Every required dependency lowers your ceiling.

**Redundancy in parallel adds nines**: two independent replicas at 99% each are both down only 1% × 1% = 0.01% of the time, so together they reach 99.99%. That's only true if their failures really are **independent**, which isn't the case when they share a region, a deploy, or a config file.

Each extra nine costs roughly **10× more** effort. Pick a target that matches what users actually need.
