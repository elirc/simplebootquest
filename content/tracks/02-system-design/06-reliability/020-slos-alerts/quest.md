---
slug: "sd-slos-alerts"
title: "SLIs, SLOs & Alerting"
type: "quiz"
xp: 15
questions: [{"prompt": "Which is an SLO?", "options": ["Request latency in ms", "99.5% of requests succeed in < 500 ms over 28 days", "A refund policy"], "answer": 1}, {"prompt": "Which deserves a page at 3am?", "options": ["CPU at 75%", "Error rate is burning the monthly error budget in a few hours", "A deprecation warning in the logs"], "answer": 1}, {"prompt": "What makes an alert actionable?", "options": ["It is red", "There is a clear response, ideally a linked runbook", "It fires often"], "answer": 1}, {"prompt": "What is alert fatigue?", "options": ["Slow alerting systems", "Too many noisy alerts, leading people to ignore them", "Alerts that expire"], "answer": 1}, {"prompt": "An SLA is usually…", "options": ["Stricter than the SLO", "A customer contract, typically looser than the internal SLO", "The same as an SLI"], "answer": 1}]
---
# SLIs, SLOs & Alerting

- **SLI** (indicator): a measurement. "The percentage of `/api` requests that return non-5xx in < 500 ms."
- **SLO** (objective): a target for an SLI. "99.5% over 28 days."
- **SLA** (agreement): a contract with consequences (refunds) if you miss it. Usually looser than the SLO.

### Alert on symptoms, not causes

Page a human when **users are hurting** ("error rate is burning the SLO budget fast"), not when CPU hits 80% (which might be fine). Cause-based signals belong on dashboards.

Good alerts are:

- **Actionable**: there's something to do. Link a runbook!
- **Urgent**: if it can wait until morning, it's a ticket, not a page.
- **Rare**: alert fatigue makes people ignore pages, including the real ones.

**Burn-rate alerts** (which you calculated in the Deploy chapter) catch both sudden outages and slow leaks: page when the budget would run out in hours, and open a ticket when it would run out in days.
